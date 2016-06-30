angular.
module('CartModule').
component('order', {
    templateUrl: 'app/cart/components/order.html',

    controller: function($log, $scope, dataServiceCart, orderService, $location) {

        $scope.deliveryTypes = [
            {
                "name":"Courier",
                "value":"1"
            },
            {
                "name":"Take self from cafe",
                "value":"2"
            }
        ];

        $scope.order = {
            deliveryType: $scope.deliveryTypes[0]
        };


        $scope.makeOrder = function(order) {
            order.products = dataServiceCart.cart.fetchAll();
            orderService.makeOrder(order).then(function(response){
                if (response.data.result) {
                    $location.path('/success').replace();

                }
            })
        }

    }
});