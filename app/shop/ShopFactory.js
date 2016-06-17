angular.module('ShopModule').factory('shopFactory', function($http) {
    return {
        getCategories: function () {
            return $http.get('backend/category.json');
        },
        getProducts: function () {
            return $http.get('backend/product.json');
        }
    }
});