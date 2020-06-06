var BaseController = require('./base_controller')

var BuildingController = function() {
    // Apply BaseController constructor (i.e. call super())
    BaseController.apply(this, arguments) 
}

BuildingController.prototype = new BaseController()

BuildingController.prototype.create = function() {
    // custom create method goes here
    console.log('HERE IS building controller CREATE');
    return true;
}


module.exports = BuildingController