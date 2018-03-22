const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('.'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({// Makes POSTs work
    extended: true,
}));
app.use(bodyParser.json({limit: '2mb'}));

app.get('/', (req, res) => res.send('HEllo express'));
app.get('/hey', (req, res) => res.send('HEllo hey'));

app.post('/lunch-request', (req, res) => {
	console.log('POST on /lunch-request with: ', req.body);

    if (!req || !req.body) {
        return res.status(400).send('Invalid data !');
    }

	//console.log('POST on /lunch-request returning: ', req);
	return res.status(200).send(req.body);

});

app.listen(3000, () => console.log('Example app listening on port 3K'));
app.listen(3001, () => console.log('Example app listening on port 3001'));
