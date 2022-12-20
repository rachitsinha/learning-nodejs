/*
GLOBAL variables in NodeJS. 
Notes:
    * window object is not available in node
    * __dirname : path to current directory
    * __filename : path to current file
    * require : function to use modules in node (CommonJS)
    * module : info about current module
    * process : info about environment where program is currently executing
*/
console.log('===== Global variables =====');
console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log('hello world');
}, 1000);
