angular.module('CartModule').filter('totalProducts', function(){

    return function (data, key1, key2) {
        // debugger;
        if (
            typeof (data) === 'undefined' &&
            typeof (key1) === 'undefined') {

            return 0;
        }

        var count = 0;

        Object.keys(data).forEach(function (i) {
            if (typeof data[i][key1] !== 'number') { return; }
            count += data[i][key1];
        });

        return count;
    }

});