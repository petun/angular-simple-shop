angular.module('CartModule').component('category', {
    templateUrl: 'app/catalog/components/category.html',

    controller: function ($log, $scope, categoryStorage, $routeParams) {
        $scope.categories = categoryStorage;
        $scope.category = null;

        if ($routeParams.categoryId) {
            $scope.category = _.find($scope.categories, function (item) {
                $log.log(item);
                return item.id == $routeParams.categoryId;
            });
        }
    }

});