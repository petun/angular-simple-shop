angular.module('CartModule').filter('totalCost', function(){

    return function (data, key1, key2) {
        // debugger;
        if (
            typeof (data) === 'undefined' &&
            typeof (key1) === 'undefined' &&
            typeof (key2) === 'undefined') {

            return 0;
        }

        var sum = 0;

        Object.keys(data).forEach(function (i) {
            if (typeof data[i][key1] !== 'number' || typeof data[i][key2] !== 'number') { return; }
            sum = sum + (data[i][key1] * data[i][key2]);
        });

        return sum;
    }

});