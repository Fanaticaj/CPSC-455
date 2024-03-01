const fs = require('fs');
const express = require('express');
app = express();

// fileCopy:
// Params:
//  copies - are the total number of copies of 'original.txt' the user will
// fileCopies grabs the contents of 'original.txt' and creates 'copies' amount of them
function fileCopy(copies) {

    let contents = fs.readFileSync('original.txt', 'utf8');
    for (let i = 0; i < copies; i++) {
        fs.writeFileSync('copy_' + (i+1) + '.txt', contents);
    }
}

app.get('/', function(req, resp) {

    // When a request is received to the host, respond with index.html
    resp.sendFile(__dirname + '/index.html');
});

app.get('/actionscript', function(req, resp) {
    // Based off the GET request, generate that many files
    fileCopy(req.query.copies);
    // Respond if a get request was received
    if(req.query.copies > 0) {
        resp.send('Files have been created.');
    }
});

app.listen(3000);