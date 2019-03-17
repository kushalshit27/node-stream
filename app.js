const http = require('http')
const fs = require('fs');



const readfile = fs.createReadStream(__dirname + '/file.txt','utf-8')
const wriefile = fs.createWriteStream(__dirname + '/write.txt')

readfile.on('data', function(chunk){
    console.log('new chunk recived');
    //console.log(chunk)
    wriefile.write(chunk);
});

