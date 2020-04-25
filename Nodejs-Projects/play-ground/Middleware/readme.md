- How To Use And Write Express Middleware https://blog.webdevsimplified.com/2019-12/express-middleware-in-depth/
- controller actions which have a req, and res variable are very similar to middleware. That is because they are essentially middleware, but with no other middleware that comes after them. They are the end of the chain which is why there are never any next calls inside the controller action.
- Calling next Is Not The Same As Calling return
```$ npm init -y```
```$ npm install express```
```$ npm install nodemon```
### middleware
- A middleware function is a function that takes a request object and either terminates the request/response cycle or passes control to another middleware function.
### Express has a few built-in middleware functions:
- json(): to parse the body of requests with a JSON payload
- urlencoded(): to parse the body of requests with URL-encoded payload - static(): to serve static files
- create custom middleware for cross-cutting concerns, such as logging, authentication, etc.
```
// Custom middleware (applied on all routes)
app.use(function(req, res, next)) {  // ...
next();}
```
```
// Custom middleware (applied on routes starting with /api/admin)
app.use(‘/api/admin’, function(req, res, next)) { // ...
next();}
```