// npm init for starting and creating the package.json file - contains the metadata and project dependencies of Node project
// Ctrl + C for killing the server and not required if Nodemon is installed

const http = require('http'); // Import HTTP module
const port = 8000;
const fs = require('fs');    // Import File system module

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    
    let filePath;
    switch (req.url){
        case '/' :                         // default url
            filePath = './index.html'
            break;
        case '/profile' :
            filePath = './profile.html'
            break;
        default :
            filePath = './404.html'
    }

    fs.readFile(filePath , function (err, data){
        if (err){
            console.log('error' , err);
            return res.end('<h1> Error !!! </h1>');
        }
        return res.end(data);    // show data if no error
    });

    //res.end ('<h1>Hello man !</h1> ')
}

// Below is the code for starting the server
const server = http.createServer(requestHandler);

server.listen(port, function(err){
if(err){
    console.log(err);
    return;
}
console.log("Server is ready and running on port : " , port);
});