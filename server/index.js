/** FEEDBACK: Love the mini comments that showed the requirements! They were super helpful! */
const express = require('express');
const app = express();

const serveIndex = (req, res, next) => {
	//html
	res.sendFile(__dirname + '/index.html');
};
const serveAbout = (req, res, next) => {
	//html
	res.send('<h1>ABOUT PAGE!!!</h1>');
};

const serveData = (req, res, next) => {
	//data
	const data = [{ name: 'ben' }, { name: 'zo' }, { name: 'carmen' }];
	res.send(data);
};

const serveData2 = (req, res, next) => {
	//data
	const data = [{ color: 'blue' }, { color: 'green' }, { color: 'yellow' }];
	res.send(data);
};
const serveColor = (req, res, next) => {
	const color = req.query.color || 'Not a Color';
	res.send(`<h1>${color} is a nice color!</h1>`);
};

app.get('/', serveIndex); //html
app.get('/about', serveAbout); //html
app.get('/api/data', serveData); //data
app.get('/api/colors', serveData2); //data

//using Query Params
app.get('/api/validColors', serveColor);
//http://localhost:8080/api/validColors?color=blue

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
