(function() {

    angular.module('shopApp', ['ngRoute', 'CartModule', 'CatalogModule']);

    fetchData().then(bootstrapApplication);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get("backend/category.json").then(function(response) {
            angular.module('CatalogModule').constant('categoryStorage', response.data);
        }, function(errorResponse) {
            // Handle error case
        });
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["shopApp"]);
        });
    }
}());

require('./routing.js');
require('./cart/CartModule.js');
require('./catalog/CatalogModule.js');