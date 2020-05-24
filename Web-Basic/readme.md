
# Web Basic

# Client–server model
- https://en.wikipedia.org/wiki/Client%E2%80%93server_model

## HTTP
- https://developer.mozilla.org/en-US/docs/Web/HTTP
- an application-layer protocol for transmitting hypermedia documents, such as HTML.
- HTTP was designed for communication between web browsers and web servers, but it can also be used for other purposes.

### Storage Inspector
- https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector

- Cookies
- Local Storage / Session Storage
- Cache Storage
- IndexedDB
- Extension Storage

### cookie
- An HTTP cookie (web cookie, browser cookie) is a small piece of data that a ```server sends to the user's web browser```. 
- The browser may store it and send it back with later requests to the same server.
- Typically, it's used to tell if two requests came from the same browser - keeping a user logged-in, for example. 
- It remembers stateful information for the stateless HTTP protocol.

### Cookies are mainly used for three purposes:
- ```Session management``` Logins, shopping carts, game scores, or anything else the server should remember
- ```Personalization``` User preferences, themes, and other settings
- ```Tracking``` Recording and analyzing user behavior
- Cookies are sent with every request, so they can ```worsen performance``` (especially for mobile data connections). 
- Modern APIs for client storage are the``` Web storage API``` (```localStorage``` and ```sessionStorage```) and ```IndexedDB```


