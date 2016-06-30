angular.module('CatalogModule').factory('shopFactory', function ($http, $log) {

    //todo return only one response ant then analize this on front
    return {
        getCategories: function () {
            return $http.get('backend/category.json');
        },
        getTop: function() {
            return $http.get('backend/top.json');
        }
    }
});