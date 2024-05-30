
// index.js

import express from 'express';
import bodyParser from 'body-parser';
import routes from './Routes/Routes.js';

const app = express();
app.use(bodyParser.json());

/*
Postman documentation url - https://documenter.getpostman.com/view/27867831/2s93zE1ysM
*/

app.use('/api', routes);

const PORT = 4010;
app.listen(PORT, () => console.log(`Started server hallBooking on port ${PORT}`));
