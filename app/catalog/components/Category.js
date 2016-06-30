angular.
module('CartModule').
component('category', {
    templateUrl: 'app/catalog/components/category.html',

    controller: function ($log, $scope, shopFactory, $routeParams) {
        $scope.categories = [];
        $scope.category = null;

        shopFactory.getCategories().then(function (response) {
            $scope.categories = response.data;

            if ($routeParams.categoryId) {
                $scope.category = _.find($scope.categories, function(item) {
                    $log.log(item);
                    return item.id == $routeParams.categoryId;
                });
            }
        });
    }

});