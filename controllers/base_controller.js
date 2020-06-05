var BaseController = function() {} // BaseController constructor

BaseController.prototype.index = function() {
   // copy from your middleware
   console.log('HERE IS BaseController INDEX');
   return NaN;
}
BaseController.prototype.show = function() {
   // copy from your middleware
   console.log('HERE IS BaseController SHOW');
   return NaN;
}
BaseController.prototype.create = function() {
   // copy from your middleware
   console.log('HERE IS BaseController CREATE');
   return NaN;
}
// etc

module.exports = BaseController