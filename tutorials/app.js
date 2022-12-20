const amount = 2;
if(amount < 10) {
    console.log('small number');
} else {
    console.log('large number');
}

console.log(`This is my first NodeJS app!`);
console.log('===== Global variables =====');
console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log('hello world');
}, 1000);
