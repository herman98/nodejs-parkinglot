'use strict';

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

if((process.argv[2] != undefined) && (process.argv[2] != NaN)){
    console.log(parseInt(process.argv[2]));

    //TODO: init slot for specific building
} else {
    console.log('no argument selected');
}

var BuildingController = require('./controllers/bulding');
var building = new BuildingController();

// var building = app.resource(myBuilding, new BuildingController());

// console.log('building: '+ building);
console.log(building.create());
console.log(building.show());
console.log(building.index());