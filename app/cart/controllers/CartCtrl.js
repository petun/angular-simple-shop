angular.module('CartModule').controller('CartController', ['$log', '$scope', 'dataServiceCart',
    function ($log, $scope, dataServiceCart) {

        $scope.getTotal = function () {
            return _.size(dataServiceCart.store.items);
        };

        $scope.store = dataServiceCart.store.items;

        $scope.getCost = function () {

        }
    }]);