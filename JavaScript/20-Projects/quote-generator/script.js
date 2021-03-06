//IIFE
(function () {
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const twitterBtn = document.getElementById('twitter');
    const newQuoteBtn = document.getElementById('new-quote');
    const loader = document.getElementById('loader');

    // Loading Spinner Shown
    function showLoadingSpinner() {
        loader.hidden = false;
        quoteContainer.hidden = true;
    }

    // Remove Loading Spinner
    function removeLoadingSpinner() {
        if (!loader.hidden) {
            quoteContainer.hidden = false;
            loader.hidden = true;
        }
    }

    // Get Quote From API
    async function getQuote() {
        showLoadingSpinner();

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // We need to use a Proxy URL to make our API call in order to avoid a CORS error
        const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
        try {
            const response = await fetch(proxyUrl + apiUrl);
            const data = await response.json();
            // Check if Author field is blank and replace it with 'Unknown'
            data.quoteAuthor === '' ?
                authorText.innerText = 'Unknown' :
                authorText.innerText = data.quoteAuthor;

            // Dynamically reduce font size for long quotes
            data.quoteText.length > 120 ?
                quoteText.classList.add('long-quote') :
                quoteText.classList.remove('long-quote');

            quoteText.innerText = data.quoteText;
            // Stop Loading, Show Quote
            removeLoadingSpinner();
            //throw new Error("see a error");
        } catch (error) {
            // infinite loop when error happen if we use getQuote();
            // getQuote();
            console.log(error)
        }
    }

    // Tweet Quote
    function tweetQuote() {
        const quote = quoteText.innerText;
        const author = authorText.innerText;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
        window.open(twitterUrl, '_blank');
    }

    // Event Listeners
    newQuoteBtn.addEventListener('click', getQuote);
    twitterBtn.addEventListener('click', tweetQuote);

    // On Load
    getQuote();

})();