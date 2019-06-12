const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = [
        {
            id: '1',
            name: 'phone 1',
            description: 'great phone!'
        },
        {
            id: '2',
            name: 'phone 2',
            description: 'mediocre phone!'
        },
        {
            id: '3',
            name: 'phone 3',
            description: 'poor phone!'
        }
    ];
    res.json(list);
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);