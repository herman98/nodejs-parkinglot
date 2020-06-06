'use strict';

exports.myDateTime = function () {
    return (new Date()).toLocaleDateString();
}

exports.timeStamp = function () {
    return (new Date());
}

