const http = require('http')
const fs = require('fs');

//const wriefile = fs.createWriteStream(__dirname + '/write.txt')

// readfile.on('data', function(chunk){
//     console.log('new chunk recived');
//     //console.log(chunk)
//     wriefile.write(chunk);
// });

//readfile.pipe(wriefile)

const server = http.createServer((req, res) => {
    const readfile = fs.createReadStream(__dirname + '/file.txt','utf-8')
    readfile.pipe(res)
  })
server.listen(3000)
