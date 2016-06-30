angular.module('CartModule').service('orderService', ['$http', function ($http) {
    return {
        makeOrder: function(order) {
            return $http.post('backend/order.php', order);
        }
    }
}]);
