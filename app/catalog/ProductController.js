angular.module('CatalogModule')
    .controller('ProductController', ['$log', '$scope', 'shopFactory', 'dataServiceCart',
        function ($log, $scope, shopFactory, dataServiceCart) {

            //todo add model Product.. add method and add angular.extend for model creation
        $scope.products = [];
        shopFactory.getProducts().then(function (response) {
            $scope.products = response.data;
        });

        $scope.addToCart = function (product) {
            debugger;
            dataServiceCart.cart.addItem(product.id, product.name, product.price, 1);
        }

    }]);