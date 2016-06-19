angular.module('CatalogModule')
    .controller('TopController', ['$log', '$scope', 'shopFactory', 'dataServiceCart', function ($log, $scope, shopFactory, dataServiceCart) {
        $scope.products = [];
        shopFactory.getTop().then(function (response) {
            $scope.products = response.data;
        });

        $scope.addToCart = function (product) {
            debugger;
            dataServiceCart.cart.addItem(product.id, product.name, product.price, 1);
        }
        }]);