//inbuilt modules
//1)
//os module-to understand the features of the system
//inbuild files will be placed in between 'filename.js'  or we should place the file name in between './filename.js'

// const os = require("os");  //here we can use variable name to rename os
// console.log(os.type());   //to identify the type of the os here my system is windows
//here the output will be get as "WINDOWS_NT"
// console.log(os.cpus());   //to get the data about the cpu
// console.log(os.freemem()); //to understand the amount of free memory in the syatem
// console.log(os.homedir());
// console.log(os.totalmem());
// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.loadavg());

// 2)
//2a)
// write deata to file synchronously
// const fs = require('fs')
// fs.writeFileSync('newfile.txt','Hy Shahana')
// console.log('end')

//read data from the file synchronously
// const fs = require('fs')
// console.log(fs.readFileSync('newfile.txt','utf-8'))
// console.log('end')

//2b)
//write data to the file asynchronously
// const fs = require('fs')
// fs.writeFile('newfile.txt','Hy jasni',(err,data)=>
// {
//     if(err)throw err;
//     console.log(`saved!,${err}`)
// })
// console.log('end')

//read data asynchronously
// const fs = require('fs')
// fs.readFile('newfile.txt','utf-8',(err,data)=>
// {
//     if(err)throw err;
//     console.log(err)
//     console.log(data)
// })
// console.log('end')

//how to add more data
// const fs = require('fs')
// fs.appendFile('newfile.txt','  How are u',(err)=>
// {
//     if(err)throw err;
//     console.log(`saved!,${err}`)
// })
// console.log('end')

//to check the file exists or not
// const fs = require('fs')
// const exixt=fs.existsSync('newfile.txt')
// console.log(exixt)

//3)path  module used to get path of the file

//to join the paths
// const path = require('path')
// const fullpath = path.join('shahana','jasni')
// console.log(fullpath)

// const path = require("path");
// const path1 = "shahana";
// const path2 = "jasni";
// const fullpath = path.join( path1 , path2 );
// console.log(fullpath);

//to get the absolute path of the given file
// const path = require('path')
// const absolutepath = path.resolve('newfile.txt')
// console.log(absolutepath)

// const path = require('path')
// const basename1=path.basename('node_new/newfile.txt')
// console.log(basename1)     //returns Extract the filename from a file path:

// const path = require('path')
// const extension=path.extname('newfile.txt')
// console.log(extension)  //returns extension of the newfile.txt as txt

// const path = require('path')
// console.log(path.delimiter) //in windows delimiter shows as ;

// const path = require('path')
// const directory=path.dirname('node_new/newfile.txt')
// console.log(directory)  //returns node_new(directory)

// 4)  The http module allows you to create a server that listens for incoming HTTP requests, processes them, and sends back HTTP responses.
// const http = require('http');

// const server = http.createServer((req, res) => {  //call the method createServer pass two parameters ,.createServer(request from the frondend,response to the frontend)
//   res.writeHead(200, { 'Content-Type': 'text/html' });   //used to send an HTTP response header, 200: The status code for a successful HTTP request (OK).
//   //A header that specifies the type of content being sent. For an HTML page, this should be 'text/html'.
//   res.write('<h1>Hello world</h1>'); // This is the HTML content that will be sent as the response.
//   res.end()   // end the response
// });

// const PORT = 3000; // assigned the port as 3000
// server.listen(PORT, () => {    // This tells the server to listen for incoming requests on the specified PORT.
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

//4)event emitter module

// const EventEmitter = require('events');
// const greeting = new EventEmitter();

// greeting.on("greet", (name) => {
//     console.log(`Hello, ${name}`);
// });

// greeting.emit("greet", "Meera");

//<--------Read the data from a file and write it into new file and append extra data to the same file that created------->//

const fs = require("fs");
fs.readFile("text.txt", "utf-8", (err, data) => {
  {
    if (err) throw err;
    console.log(err);
    console.log(data);
  }
  const fs = require("fs");
  fs.writeFile("new.txt", data, (err, data) => {
    {
      if (err) throw err;
      console.log(`saved!,${err}`);
    }
    const fs = require("fs");
    fs.appendFile("new.txt", "node js exercises", (err) => {
      if (err) throw err;
      console.log(`saved!,${err}`);
    });
  });
});

//<----------Promise--to check the value of x is right or not----->//

//method 1

// let promises = new Promise(function (resolve,reject){
//   let x=11
//   if(x==10){
//   resolve("Succesful")
//   }else{
//   reject("Failed")
//   }
// })
// promises.then(       ///complete
//   function(value){},
//   function(error){}
// )
// //.catch ------reject
// console.log(promises)

//method 2

// const prom = new Promise((res,rej)=>{
//   let a=10;
//   if(a==10){
//     res('verified')
//   }else{
//     rej('Failed')
//   }
// })
// prom.then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })

//<-------Async&await--------->

// const fs = require('fs').promises;

// const readAndWriteFile = async () => {
//   try {
//     const data =  await fs.readFile('new.txt', 'utf8');
//     console.log('File contents:', data);

//     await fs.writeFile('output.txt', data);
//     console.log('File written successfully');

//   } catch (err) {
//     console.error('Error:', err);
//   }
// };

// readAndWriteFile();

const summation = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};
const reault=summation(1, 2)
console.log(reault)




