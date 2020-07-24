/*
https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
*/

async function getQuoteWithProxyURL() {

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //Proxy URL to avoid a CORS error
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
    } catch (error) {
        console.log(error);
        getQuoteWithProxyURL();
    }
}