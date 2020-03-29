- How To Use And Write Express Middleware https://blog.webdevsimplified.com/2019-12/express-middleware-in-depth/
- controller actions which have a req, and res variable are very similar to middleware. That is because they are essentially middleware, but with no other middleware that comes after them. They are the end of the chain which is why there are never any next calls inside the controller action.
- Calling next Is Not The Same As Calling return
```$ npm init -y```
```$ npm install express```
```$ npm install nodemon```
