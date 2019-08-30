# Nodejs-Projects
```
Node is not a programming language.
Node is NOT a framework, it is a runtime environment for executing JavaScript code
```
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
