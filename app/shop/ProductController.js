angular.module('ShopModule')
    .controller('ProductController', ['$log', '$scope', 'shopFactory', function ($log, $scope, shopFactory) {

        $scope.products = [];
        shopFactory.getProducts().then(function (response) {
            $scope.products = response.data;
        });

        $scope.addToCart = function (product) {
            $log.log(product);
        }

    }]);