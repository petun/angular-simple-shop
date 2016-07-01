angular.
module('CartModule').
component('categoryMenu', {
    templateUrl: 'app/catalog/components/category-menu.html',

    controller: function ($log, $scope, categoryStorage) {
        $scope.categories = categoryStorage;
    }
});