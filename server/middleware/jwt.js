import jwt from 'jsonwebtoken';
import { config } from '../config.js';


const secret = config.jwt.secretKey;

const token = jwt.sign(
    {
        id: 'userId',
        isAdmin: false,
    },
    secret,
    { expiresIn: 2 }
);

// setTimeout(() => {
//     jwt.verify(token, secret, (error, decoded) => {
//         console.log(error, decoded);
//     });
// }, 3000);

console.log(token);