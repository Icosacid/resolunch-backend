const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('HEllo express'));
app.get('/hey', (req, res) => res.send('HEllo hey'));

app.post('/pay', (req, res) => {
	console.log('req');
	console.log(req);
	res.send(100 * Math.random() + '€');
});

app.listen(3000, () => console.log('Example app listening on port 3K'));
app.listen(3001, () => console.log('Example app listening on port 3001'));

app.use(express.static('.'));