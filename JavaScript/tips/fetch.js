// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch
/*

The fetch specification differs from jQuery.ajax() in three main ways:

The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.

fetch() can receive cross-site cookies; you can establish a cross site session using fetch. 

fetch won’t send cookies, unless you set the credentials init option. (Since Aug 25, 2017. The spec changed the default credentials policy to same-origin. Firefox changed since 61.0b13.)

*/

fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));