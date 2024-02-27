let fs = require('fs');
const express = require('express');

function fileCopy(copies) {

    let contents = fs.readFileSync('original.txt', 'utf8');
    console.log('File printed: \n' + contents);

    for (let i = 0; i < copies; i++) {
        fs.writeFile('copy_' + i+1 + '.txt', contents);
    }
}

app = express();

app.get('/', function(req, resp) {
    resp.sendFile(__dirname + '/index.html');
    fileCopy(req.query.copies);
    // respond to the user
});

app.listen(3000);