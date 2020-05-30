
# Web Basic

# Client–server model
- https://en.wikipedia.org/wiki/Client%E2%80%93server_model
- Clients and servers communicate by exchanging individual messages (as opposed to a stream of data)
- The messages sent by the client, usually a Web browser, are called requests and the messages sent by the server as an answer are called responses.
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- The browser is ```always``` the entity ```initiating the request```. It is ```never``` the server (though some mechanisms have been added over the years to simulate server-initiated messages).

### Proxy server
- Between the client and the server there are numerous entities, collectively called ```proxies```, which perform different operations and act as ```gateways``` or ```caches```, for example.

### Proxies may perform numerous functions:
- ```caching``` (the cache can be public or private, like the browser cache)
- ```filtering``` (like an antivirus scan or parental controls)
- ```load balancing``` (to allow multiple servers to serve the different requests)
- ```authentication``` (to control access to different resources)
- ```logging``` (allowing the storage of historical information)

### HTTP
- https://developer.mozilla.org/en-US/docs/Web/HTTP
- an application-layer protocol for transmitting hypermedia documents, such as HTML.
- HTTP was designed for communication between web browsers and web servers, but it can also be used for other purposes.
-  HTTP is a ```stateless protocol```, meaning that the server does not keep any data (state) between two requests
- HTTP is stateless, but ```not sessionless```
- But while the ```core of HTTP itself is stateless```, HTTP ```cookies``` allow the use of ```stateful sessions```. 
- Using ```header extensibility```, HTTP Cookies are added to the workflow, allowing session creation on each HTTP request to share the same context, or the same state.

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
- The most commonly used API based on HTTP is the ```XMLHttpRequest API```, which can be used to exchange data between a ```user agent``` and a ```server```. 
- The modern ```Fetch API``` provides the same features with a more powerful and flexible feature set.
- server-sent events,

### XMLHttpRequest
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
- ```XMLHttpRequest``` (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in ```AJAX``` programming.

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
- The more we use cached resources, the better the responsiveness and the performance of a Web site will be.
- https://web.dev/http-cache/
- https://www.mnot.net/cache_docs/

### There are two main reasons that Web caches are used:
- To reduce latency
- To reduce network traffic

### HTTP caching two main categories:
- ```private``` or ```shared``` caches.
- A ```shared cache``` is a cache that stores responses for reuse by ```more than one user```. 
- A ```private cache``` is dedicated to a ```single user```. 
- HTTP caching is ```optional```, but reusing a cached resource is usually desirable.

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
- ```Cache-Control: max-age=31536000``` : ```"max-age=<seconds>"```
- ```Cache-Control: must-revalidate``` : ```"must-revalidate"``` directive, the cache must verify the status of the stale resources before using it and expired ones should ```not be used```

### Pragma header
- not a reliable replacement for the general HTTP/1.1 Cache-Control header
- it does behave the same as ```Cache-Control: no-cache```
- Use Pragma only for ```backwards compatibility``` with ```HTTP/1.0``` clients

### cache eviction
- Before this expiration time, the resource is ```fresh```; after the expiration time, the resource is ```stale```. 
- when the cache receives a request for a ```stale resource```, it forwards this request with a ```If-None-Match``` to check if it is in fact still fresh. If so, the server returns a ```304``` (Not Modified) header ```without sending the body``` of the requested resource, saving some bandwidth.
- an example of this process with a shared cache proxy : https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
- The freshness lifetime is calculated based on several headers. If a "Cache-control: max-age=N" header is specified, then the freshness lifetime is equal to N

### Revved resources
- a ```revision``` (or ```version```) number is added. That way each new revision of this resource is considered as a resource on its own that never changes and that can have an expiration time very far in the future,
- This technique has an ```additional benefit```: updating two cached resources at the same time will not lead to the situation where the out-dated version of one resource is used in combination with the new version of the other one. This is very important when web sites have CSS stylesheets or JS scripts that have mutual dependencies, i.e., they depend on each other because they refer to the same HTML elements.

### Cache validation
- ```Revalidation``` is triggered when the user presses the ```reload button```. 
- It is also triggered under normal browsing if the cached response includes the ```"Cache-control: must-revalidate" ``` header. 
- Another factor is the cache validation preferences in the Advanced->Cache preferences panel. There is an option to force a validation each time a document is loaded.

### ETags
- can be used as a ```strong validator```.
- The ```Last-Modified``` response header can be used as a weak validator.

### Varying responses
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
- ```Vary: User-Agent``` : Because the User-Agent header value is different ("varies") for mobile and desktop clients, caches will ```not be used to serve mobile content``` mistakenly to desktop users or ```vice versa```.

### What is the Difference between session and caching?
- Session data is stored at the ```user level``` but caching data is stored at the ```application level``` and shared by all the users. 
- Sessions may not improve performance whereas Cache will improve site performance. 
- Items in cache can expire after given time to cache while items in session will stay till session expires.
- https://redislabs.com/blog/cache-vs-session-store/

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
### Modern APIs for client storage
- the``` Web storage API``` (```localStorage``` and ```sessionStorage```) 
- and ```IndexedDB```

### Creating cookies
- After receiving an HTTP request, a server can send a ```Set-Cookie``` header with the ```response```. 
- The cookie is ```usually stored by the browser```, and then the cookie is sent with requests made to the ```same server``` inside a ```Cookie HTTP header```.
- Additionally, restrictions to a specific domain and path can be set, limiting where the cookie is sent.
- confidential information should ```never be stored in HTTP Cookies```, as the entire mechanism is inherently insecure and ```doesn't encrypt``` any information.

### The Set-Cookie and Cookie headers
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
- Set-Cookie: <cookie-name>=<cookie-value>
- Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
- Multiple attributes are also possible, for example:
```
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```
- The Set-Cookie HTTP response header is used to send cookies from the server to the user agent, so the user agent can send them back to the server later.
```
HTTP/2.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry
```
- Set-Cookie in Nodejs https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_response_setheader_name_value

### Session cookie
- Session cookies are removed when the client shuts down.
- Cookies are session cookies if they don't specify the ```Expires``` or ```Max-Age``` attributes

### Permanent cookie
- Instead of expiring when the client is closed, permanent cookies expire at a specific date (Expires) or after a specific length of time (Max-Age).

### Invalid domains
- A cookie for a domain that does not include the server that set it should be rejected by the user agent.
- The following cookie will be rejected if set by a server hosted on originalcompany.com:
```
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```
- A cookie for a sub domain of the serving domain will be rejected. The following cookie will be rejected if set by a server hosted on example.com:
```
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```
### Restrict access to cookies
- There are a couple of ways to ensure that cookies are sent securely and are not accessed by unintended parties or scripts: the ```Secure``` attribute and the ```HttpOnly``` attribute
- A cookie with the Secure attribute is sent to the server only with an encrypted request over the ```HTTPS``` protocol, never with unsecured HTTP. 
- Even with Secure, sensitive information should never be stored in cookies, as they are inherently insecure and this attribute can't offer real protection
- Insecure sites (with http: in the URL) can't set cookies with the Secure attribute
- The benefit of using Secure is that the cookie data is encrypted while it is in transit over the network, and therefore can't be easily used by a ```man-in-the-middle``` attacker.

### Man-in-the-middle attack (MitM)
- https://developer.mozilla.org/en-US/docs/Glossary/MitM
- Don't just ignore certificate warnings. You could be connecting to a phishing server or an imposter server.
- Sensitive sites ```without HTTPS encryption``` on public Wi-Fi networks aren't trustworthy.
- Check for HTTPS in your address bar and ```ensure encryption``` is in-place before logging in.

### Cookie prefixes
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie

### JavaScript access using Document.cookie
- https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
- Read all cookies accessible from this location ```allCookies = document.cookie;```
- Write a new cookie ```document.cookie = newCookie;```
- A cookie with the ```HttpOnly``` attribute is ```inaccessible``` to the JavaScript Document.cookie API; it is sent only to the server.
- New cookies can be created via JavaScript using the Document.cookie property, and existing cookies can be accessed from JavaScript as well, if the HttpOnly flag is not set.
- Cookies created via JavaScript cannot include the HttpOnly flag.
- Cookies available to JavaScript can be stolen through XSS.

### Cookies and Security
- Common ways to steal cookies include using Social Engineering or by exploiting an XSS vulnerability in the application
- https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/
- cookies that persist server-side sessions don't need to be available to JavaScript, and should have the HttpOnly attribute. This precaution helps mitigate ```cross-site scripting (XSS)``` attacks.
- Use the HttpOnly attribute to prevent access to cookie values via JavaScript.
- Cookies that are used for sensitive information (such as indicating authentication) should have a short lifetime, with the SameSite attribute set to Strict or Lax.

### Cross-site scripting (XSS)
- https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#Cross-site_scripting_(XSS)

### Define where cookies are sent
- The ```Domain``` and ```Path``` attributes define the scope of the cookie: what URLs the cookies should be sent to.
- The ```Domain``` attribute specifies which hosts are allowed to receive the cookie. 
- If unspecified, it defaults to the host of the ```current document location```, ```excluding subdomains```. 
- If Domain is specified, then subdomains are always included.
- For example, if Domain=mozilla.org is set, then cookies are included on subdomains like developer.mozilla.org.
- The ```Path attribute``` indicates a URL path that must exist in the requested URL in order to send the Cookie header.
- the Cookie header. The ```%x2F ("/")``` character is considered a directory separator, and subdirectories match as well.
```
For example, if Path=/docs is set, these paths match:

/docs
/docs/Web/
/docs/Web/HTTP
```
### SameSite attribute
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
- ```Set-Cookie: mykey=myvalue; SameSite=Strict```
- The SameSite attribute can have one of three values (case-insensitive):

### privacy
- A cookie is associated with a domain. If this domain is the same as the domain of the page you are on, the cookie is said to be a ```first-party cookie```.
- if the domain is different, it is said to be a ```third-party cookie```. 
- Cookie blocking can cause some third-party components (such as social media widgets) to not function as intended.

### Document.location
- https://developer.mozilla.org/en-US/docs/Web/API/Document/location
- The ```Document.location``` read-only property returns a Location object, which contains information about the URL of the document and provides methods for changing that URL and loading another URL.
- To retrieve just the URL as a string, the read-only ```document.URL``` property can also be used

### Other ways to store information in the browser
- Another approach to storing data in the browser is the ```Web storage API```. 
- The ```window.sessionStorage``` and ```window.localStorage``` properties correspond to ```session``` and ```permanent cookies``` in duration, ```but have larger storage limits than cookies```, and are ```never sent to a server```. 
- More structured and ```larger amounts of data``` can be stored using the ```IndexedDB API```, or a library built on it.