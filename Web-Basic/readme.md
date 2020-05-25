
# Web Basic

# Client–server model
- https://en.wikipedia.org/wiki/Client%E2%80%93server_model
- Clients and servers communicate by exchanging individual messages (as opposed to a stream of data)
- The messages sent by the client, usually a Web browser, are called requests and the messages sent by the server as an answer are called responses.
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- The browser is ```always``` the entity ```initiating the request```. It is ```never``` the server (though some mechanisms have been added over the years to simulate server-initiated messages).

### Proxy server
- Between the client and the server there are numerous entities, collectively called ```proxies```, which perform different operations and act as gateways or caches, for example.

### Proxies may perform numerous functions:
- caching (the cache can be public or private, like the browser cache)
- filtering (like an antivirus scan or parental controls)
- load balancing (to allow multiple servers to serve the different requests)
- authentication (to control access to different resources)
- logging (allowing the storage of historical information)

### HTTP
- https://developer.mozilla.org/en-US/docs/Web/HTTP
- an application-layer protocol for transmitting hypermedia documents, such as HTML.
- HTTP was designed for communication between web browsers and web servers, but it can also be used for other purposes.
-  HTTP is a ```stateless protocol```, meaning that the server does not keep any data (state) between two requests
- HTTP is stateless, but ```not sessionless```
- But while the ```core of HTTP itself is stateless```, HTTP ```cookies``` allow the use of ```stateful sessions```. 
- Using header extensibility, HTTP Cookies are added to the workflow, allowing session creation on each HTTP request to share the same context, or the same state.


### HTTP and connections
- Among the two most common transport protocols on the Internet, ```TCP is reliable``` and ```UDP isn't```. HTTP therefore ```relies on the TCP standard```, which is connection-based.

### HTTP flow
- Open a TCP connection
- Send an HTTP message
- Read the response sent by the server
- Close or reuse the connection for further requests

### HTTP messages
- There are two types of HTTP messages, ```requests``` and ```responses```, each with its own format.

### APIs based on HTTP
- The most commonly used API based on HTTP is the ```XMLHttpRequest API```, which can be used to exchange data between a user agent and a server. 
- The modern ```Fetch API``` provides the same features with a more powerful and flexible feature set.
- server-sent events,

### XMLHttpRequest
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
- XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming.

### Fetch API
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

### server-sent events
- https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events

### Storage Inspector
- https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector

- Cookies
- Local Storage / Session Storage
- Cache Storage
- IndexedDB
- Extension Storage

### HTTP caching
- By making use of HTTP caching, Web sites become more responsive.
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
- When a web cache has a requested resource in its store, it intercepts the request and returns its copy instead of re-downloading from the originating server.

### HTTP caching two main categories:
- ```private``` or ```shared``` caches.
- A ```shared cache``` is a cache that stores responses for reuse by ```more than one user```. 
- A ```private cache``` is dedicated to a ```single user```. 
- HTTP caching is optional, but reusing a cached resource is usually desirable.

### Private browser caches
- A private cache is dedicated to a single user
- This cache is used to make visited documents available for ```back/forward navigation```, ```saving, viewing-as-source```, etc
- without requiring an additional trip to the server. 
- It likewise improves offline browsing of cached content.

### Shared proxy caches
- A shared cache is a cache that stores responses to be reused by more than one user. 

### Targets of caching operations
- However, common HTTP caches are typically limited to caching responses to ```GET``` and may decline other methods. 

### Cache-control header
- The ```Cache-Control``` HTTP/1.1 general-header field is used to specify directives for caching mechanisms in ```both requests and responses```. 
- ```Cache-Control: no-store``` : The cache should ```not``` store anything about the client request or server response.
- ```Cache-Control: no-cache``` : A cache will send the request to the origin server for validation before releasing a cached copy.
- ```Cache-Control: public``` : The ```"public"``` directive indicates that the response may be cached by any cache. This can be useful if pages with ```HTTP authentication```
- ```Cache-Control: private``` : On the other hand, ```"private"``` indicates that the response is intended for a single user only and must not be stored by a shared cache


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

