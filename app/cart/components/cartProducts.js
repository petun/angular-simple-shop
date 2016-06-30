angular.
module('CartModule').
component('cartProducts', {
    //todo prevent a click or css cursor
    template: '<table class="table">' +
    '<tr><th>Name</th><th>Cost</th><th></th><th>Total Cost</th><th></th></tr>' +
    '<tr ng-repeat="(id, product) in products"><td>{{product.name}}</td>' +
    '<td>{{product.price | number:2}}</td>' +
    '<td><a ng-click="decreaseQuantity(id)"><i class="glyphicon glyphicon-menu-down"></i></a> {{product.quantity}} <a ng-click="increaseQuantity(id)"><i class="glyphicon glyphicon-menu-up"></i></a></td>' +
    '<td>{{product.price*product.quantity | number:2}}</td>' +
    '<td><a  ng-click="removeItem(id)"><i class="glyphicon glyphicon-remove"></i></a></td></tr>' +
    '</table>',
    controller: function GreetUserController($scope, $log, dataServiceCart) {

        $scope.products = dataServiceCart.cart.fetchAll();
        $log.log($scope.products);

        $scope.removeItem = function(id) {
            $log.log('delete item ' + id);
            dataServiceCart.cart.delItem(id);
        };

        $scope.decreaseQuantity = function(id) {
            var item = dataServiceCart.cart.getItem(id);
            if (item.quantity <= 1) {
                return $scope.removeItem(id);
            }
            return dataServiceCart.cart.updateItem(id, item.quantity - 1);
        };

        $scope.increaseQuantity = function(id) {
            var item = dataServiceCart.cart.getItem(id);
            return dataServiceCart.cart.updateItem(id, item.quantity + 1);
        }

    }
});