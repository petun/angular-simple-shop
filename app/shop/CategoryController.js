angular.module('ShopModule')
    .controller('CategoryController', ['$log', '$scope', 'shopFactory', function ($log, $scope, shopFactory) {
        $scope.categories = [];
        shopFactory.getCategories().then(function (response) {
            $scope.categories = response.data;
        });
    }]);