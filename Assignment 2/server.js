const fs = require('fs');
const express = require('express');
app = express();

// fileCopy:
// Params:
//  copies - are the total number of copies of 'original.txt' the user will 
function fileCopy(copies) {

    let contents = fs.readFileSync('original.txt', 'utf8');
    for (let i = 0; i < copies; i++) {
        fs.writeFileSync('copy_' + (i+1) + '.txt', contents);
    }
}


app.get('/', function(req, resp) {
    resp.sendFile(__dirname + '/index.html');
    fileCopy(req.query.copies);
    if(req.query.copies > 0) {
        resp.send('Files have been created.');
    }
});

app.listen(3000);