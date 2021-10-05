const fs = require('fs');

//synchronus method call
let files = fs.readdirSync("/info.txt"); 
console.log(files);
}