angular.module('CartModule')
.directive('addToCart', function() {
    return {
        restrict: 'E',
        scope: {
            product: '@'
        },
        template: '<a href="" ng-click="addToCart()">Add to cart</a>',
        controller: function($log, $scope, dataServiceCart) {
            $scope.product = JSON.parse($scope.product);

            $scope.addToCart = function() {
                $log.log($scope.product);
                var product = JSON.parse($scope.product);
                dataServiceCart.cart.addItem(product.id, product.name, product.price, 1);
            }
        }
    };
});