
# Web Basic

## HTTP

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