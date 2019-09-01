// This is what the code looks like for creating a new JWT session token, 
// using Express and the node package node-jsonwebtoken:

import {Request, Response} from "express";
import * as express from 'express';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/login')
    .post(loginRoute);

const RSA_PRIVATE_KEY = fs.readFileSync('./key/private.key');

export function loginRoute(req: Request, res: Response) {

    const email = req.body.email,
          password = req.body.password;

    if (validateEmailAndPassword()) {
       const userId = findUserIdForEmail(email);

        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 10,
                subject: userId
            }

          // send the JWT back to the user
          // TODO - multiple options available                              
    }
    else {
        // send status 401 Unauthorized
        res.sendStatus(401); 
    }
}
