var unirest = require("unirest");
require('dotenv').config({path: __dirname + '/.env'});


var req = unirest("GET", "https://alpha-vantage.p.rapidapi.com/query");

const symbol = "MSFT";
req.query({
	"datatype": "json",
	"symbol": symbol,
	"function": "TIME_SERIES_MONTHLY"
});
const API_KEY = process.env.API_KEY;
console.log('API_KEY=', API_KEY);

req.headers({
	"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
	"x-rapidapi-key": API_KEY,
	"useQueryString": true
});

fs = require('fs');

req.end((res) => {
	if (res.error) throw new Error(res.error);
	console.log(JSON.stringify(res.body));
	console.log(__dirname);

	fs.writeFile(__dirname+`/data/${symbol}.txt`, JSON.stringify(res.body), (err) => {
		if (err) return console.log(err);
	});
	// /Users/xingwang/Side-Projects/MSFT.txt
});

