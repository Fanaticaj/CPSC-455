const fs = require('fs');

function fileCopy(data) {
    console.log(data);
    for (let i = 0; i < data; i++) {
        fs.writeFile('copy_' + (i+1) + '.txt', 1,function(error){
            console.log("Done!");
            });
    }
};

fs.readFile('number.txt', "utf8", function read(error, data){
    if (error) {
        throw error;
    }
    const content = data;
    console.log(content);
    for (let i = 0; i < content; i++) {
        fs.writeFile('copy_' + (i+1) + '.txt', '1',function(error){
            console.log("Done!");
            });
    }
});

function fileCopy(nFiles) {
    console.log(nFiles);
    for (let i = 0; i < nFiles; i++) {
        fs.writeFile('copy_' + (i+1) + '.txt', 1,function(error){
            console.log("Done!");
            });
    }
};
