### Window.localStorage
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

- ```myStorage = window.localStorage;```
- The read-only localStorage property allows you to access a Storage object for the Document's origin; 
- the stored data is saved across browser sessions. 
- ```localStorage``` is similar to ```sessionStorage```, except that while data stored in localStorage has ```no expiration time```, data stored in sessionStorage gets ```cleared when the page session ends`` — that is, when the page is closed. 
- Data in a localStorage object created in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.
- Data stored in either localStorage or sessionStorage is ```specific to the protocol``` of the page. 
- In particular, data stored by a script on a site accessed with ```HTTP``` (e.g., http://example.com) is put in a different localStorage object from the same site accessed with ```HTTPS``` (e.g.,  https://example.com).

- The keys and the values are always in the ```UTF-16 DOMString format```, which uses two bytes per character.  
- As with objects, integer keys are automatically converted to strings.