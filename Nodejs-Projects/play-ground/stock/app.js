var unirest = require("unirest");
require('dotenv').config({ path: __dirname + '/.env' });
fs = require('fs');

var req = unirest("GET", "https://alpha-vantage.p.rapidapi.com/query");

const SYMBOL = "MSFT";
const API_KEY = process.env.API_KEY;
const FILE = __dirname + `/data/${SYMBOL}.txt`;

req.query({
	"datatype": "json",
	"symbol": SYMBOL,
	"function": "TIME_SERIES_MONTHLY"
});

// console.log('API_KEY=', API_KEY);

req.headers({
	"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
	"x-rapidapi-key": API_KEY,
	"useQueryString": true
});


req.end((res) => {
	if (res.error) throw new Error(res.error);
	//console.log(JSON.stringify(res.body)); 
	fs.writeFile(FILE, JSON.stringify(res.body), (err) => {
		if (err) return console.log(err);
	});
});

