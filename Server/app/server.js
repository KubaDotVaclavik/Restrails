import express from 'express';
import bodyParser from 'body-parser'
import * as CONST from './const';
import router from './router';

let app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/static', express.static('static'))
app.use(router)

app.listen(CONST.PORT)
console.log(`App listening on port: ${CONST.PORT}`)