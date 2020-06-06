'use strict';

// EX:1 node main.js herman 45 hohoho
for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}
