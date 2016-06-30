angular.
module('shopApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.

        when('/top', {
            template: '<top-products></top-products>'
        }).
        when('/category/:categoryId', {
            template: '<category></category>'
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