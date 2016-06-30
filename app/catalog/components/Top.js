angular.
module('CartModule').
component('topProducts', {
    templateUrl: 'app/catalog/components/category.html',

    controller: function ($log, $scope, shopFactory, $routeParams) {
        $scope.category = {};
        $scope.category.name = 'Best products';

        shopFactory.getTop().then(function (response) {
            $scope.category.products = response.data;
        });
    }

});