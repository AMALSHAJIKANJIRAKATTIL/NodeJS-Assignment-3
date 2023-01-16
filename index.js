

let fs=require('fs');
let server=require('http')

fs.writeFileSync('index.html','<html><head><title>Assignment 3</title></head><body><h1> Hello World </h1><p> This is Amal S</p></body></html>',(err)=>{
    if(err){
        console.log(err);
    }
   
})

let data=fs.readFileSync('index.html',{encoding:'utf8', flag:'r'});



server.createServer((req,res)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
        
   
}).listen(5000)