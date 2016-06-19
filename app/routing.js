angular.
module('shopApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.

        when('/top', {
            templateUrl: 'app/catalog/top.html'
        }).
        when('/category/:categoryId', {
            templateUrl: 'app/catalog/category.html'
        }).
        when('/order', {
            template: '<order></order>'
        }).
        when('/success', {
            template: '<order-success></order-success>'
        }).
        otherwise('/top');
    }
]);