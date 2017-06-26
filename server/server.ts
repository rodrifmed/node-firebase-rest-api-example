import * as express from 'express';
import { Application } from "express";
import { initRestApi } from "./api/api";
import { initFirebase } from "./model/firebase.admin";

const bodyParser = require('body-parser');

const app: Application = express();

initFirebase();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());


initRestApi(app);

app.listen(8090, () => {
	console.log('Server is now running on port 8090 ...');
});