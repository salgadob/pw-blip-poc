const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

// Endpoint to fetch books
app.get('/api/books', (req, res) => {
    request('https://demoqa.com/BookStore/v1/Books', { json: true }, (err, response, body) => {
        if (err) { return res.status(500).send(err); }
        res.send(body);
    });
});
