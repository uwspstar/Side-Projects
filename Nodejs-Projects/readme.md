# Nodejs-Projects
```
Node is not a programming language.
Node is NOT a framework, it is a runtime environment for executing JavaScript code
```
### non-blocking, or asynchronous nature
-  Node applications are highly-scalable and this is because of ```the non-blocking, or asynchronous nature of Node.```
- a ```single thread``` allocated to handle a request. So a ```single thread``` is used to handle ```multiple requests.```
- tradition blocking, or sychronous architecture (like ASP.NET or Rails) , a new thread to serve another client.
```
a thread is allocated to handle that request. As part of handling that request, 
it is likely that we're going to query a database, 
and as you know sometimes it may take awhile until the result is ready.
When the database is executing the query, 
that thread is sitting there, waiting. 
It can't be used to serve another client.
So, with a new thread to serve another client.
```
```
Of course in ASP.NET it is possible to use asynchronous architecture, 
but you will have to do extra work for that. In
contrast, Node applications are asynchronous by default.
```

### event queue. 
```
Node is consistently monitoring this queue in the background. 
When it finds an event in this queue it will take it out and process it. 
This kind of architecture makes Node ideal for building applications 
that include a lot of diskor network access.
```
- Window or document arguments
```
not defined. So, as I told you before, 
in Node we don't have window or document arguments. 
These are part of the run time environment that we get with browsers. 
In Node we have other objects
```
### module warper function
- node execute the function with IIFE
```
( function(exports, require, module, __filename, __dirname){
 ...
})
```
