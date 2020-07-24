async function getQuote() {

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //Proxy URL to avoid a CORS error
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
    } catch (error) {
        console.log(error);
        getQuote();
    }
}