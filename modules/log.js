var log = {
    info: function (info) { 
        console.log('Info: ' + info);
    },
    warning:function (warning) { 
        console.log('Warning: ' + warning);
    },
    error:function (error) { 
        console.log('Error: ' + error);
    },
    debug:function (debug) { 
        console.log('Debug: ' + debug);
    }
};

module.exports = log