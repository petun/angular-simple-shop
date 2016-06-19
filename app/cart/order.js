angular.
module('CartModule').
component('order', {
    templateUrl: 'app/cart/order.html',

    controller: function($log, $scope, dataServiceCart) {

        $scope.order = {};

        $scope.makeOrder = function(order) {
            order.products = dataServiceCart.cart.fetchAll();
            console.log(order);
        }
    }
});