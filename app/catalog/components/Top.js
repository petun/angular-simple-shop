angular.
module('CartModule').
component('topProducts', {
    templateUrl: 'app/catalog/components/category.html',

    controller: function ($log, $scope, categoryStorage, $routeParams) {
        $scope.category = {};
        $scope.category.name = 'Best products';
        $scope.category.products = [];

        _.each(categoryStorage, function(category){

             _.each(category.products, function (product) {
                if (product.is_top == 1) {
                    $scope.category.products.push(product);
                }
            });
            $log.log($scope.category.products);
        });
    }
});