const express = require('express');
app = express();


function compute(n1, n2) {
    console.log(+n1 + +n2);
}

app.get("/", function(req, resp){
		
	resp.sendFile(__dirname + "/index.html");	
	
});

app.get('/actionscript', function(req, resp) {

    console.log('N1: ' + req.query.n1 + ' N2: '+ req.query.n2);
    compute(req.query.n1, req.query.n2);
});

app.listen(3000);