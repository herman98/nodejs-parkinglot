'use strict';

// EX:1 node main.js jacob 45 hohoho
// for (let j = 0; j < process.argv.length; j++) {
//     console.log(j + ' -> ' + (process.argv[j]));
// }

// EX:2 node main.js -i jacob -j 45 -k hohoho
// const args = require('minimist')(process.argv.slice(2));

// console.log(args);
// console.log(args.i);
// console.log(args.j);
// console.log(args.k);
// console.log(args.h);

// EX:3 node main.js -i jacob -j 45 -k hohoho -h -v
// const minimist = require('minimist');

// let args = minimist(process.argv.slice(2), {
//     alias: {
//         h: 'help',
//         v: 'version'
//     }
// });

// console.log('args:', args);

//EX:4 node main.js --name=herman --age=18
const args = require('yargs').argv;

console.log('Name: ' + args.name);
console.log('Age: ' + args.age);


const colors = require('colors');

const chosenColor = colors.getRandomColor();
console.log(`You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`);

const favoriteColor = colors.getBlue();
console.log(`My favorite color is ${favoriteColor.name}/${favoriteColor.code}, btw`);
