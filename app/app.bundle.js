/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('shopApp', ['ngRoute', 'CartModule', 'CatalogModule']);

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(14);

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('CartModule', ['ngStorage']);

	__webpack_require__(20);

	__webpack_require__(32);
	__webpack_require__(33);

	__webpack_require__(31);
	__webpack_require__(26);

	__webpack_require__(23);
	__webpack_require__(24);

	__webpack_require__(29);
	__webpack_require__(30);

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('CatalogModule', ['CartModule']);

	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);

	__webpack_require__(41);


/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	angular.module('CartModule')
	.directive('addToCart', function() {
	    return {
	        restrict: 'E',
	        scope: {
	            product: '@'
	        },
	        template: '<a href="" ng-click="addToCart()">Add to cart</a>',
	        controller: function($log, $scope, dataServiceCart) {
	            $scope.product = JSON.parse($scope.product);

	            $scope.addToCart = function() {
	                $log.log($scope.product);
	                var product = JSON.parse($scope.product);
	                dataServiceCart.cart.addItem(product.id, product.name, product.price, 1);
	            }
	        }
	    };
	});

/***/ },
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	angular.
	module('CartModule').
	component('order', {
	    templateUrl: 'app/cart/components/order.html',

	    controller: function($log, $scope, dataServiceCart, orderService, $location) {

	        $scope.deliveryTypes = [
	            {
	                "name":"Courier",
	                "value":"1"
	            },
	            {
	                "name":"Take self from cafe",
	                "value":"2"
	            }
	        ];

	        $scope.order = {
	            deliveryType: $scope.deliveryTypes[0]
	        };


	        $scope.makeOrder = function(order) {
	            order.products = dataServiceCart.cart.fetchAll();
	            orderService.makeOrder(order).then(function(response){
	                if (response.data.result) {
	                    $location.path('/success').replace();

	                }
	            })
	        }

	    }
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	angular.
	module('CartModule').
	component('orderSuccess', {
	    template: '<div class="content"><div class="container">' +
	    '<h1>Order complete successfully</h1>' +
	    '<p>We receive your order. As soon as possible.</p>' +
	    '</div> </div>',
	});

/***/ },
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	angular.
	module('CartModule').
	component('cartProducts', {
	    //todo prevent a click or css cursor
	    template: '<table class="table">' +
	    '<tr><th>Name</th><th>Cost</th><th></th><th>Total Cost</th><th></th></tr>' +
	    '<tr ng-repeat="(id, product) in products"><td>{{product.name}}</td>' +
	    '<td>{{product.price | number:2}}</td>' +
	    '<td><a ng-click="decreaseQuantity(id)"><i class="glyphicon glyphicon-menu-down"></i></a> {{product.quantity}} <a ng-click="increaseQuantity(id)"><i class="glyphicon glyphicon-menu-up"></i></a></td>' +
	    '<td>{{product.price*product.quantity | number:2}}</td>' +
	    '<td><a  ng-click="removeItem(id)"><i class="glyphicon glyphicon-remove"></i></a></td></tr>' +
	    '</table>',
	    controller: function GreetUserController($scope, $log, dataServiceCart) {

	        $scope.products = dataServiceCart.cart.fetchAll();
	        $log.log($scope.products);

	        $scope.removeItem = function(id) {
	            $log.log('delete item ' + id);
	            dataServiceCart.cart.delItem(id);
	        };

	        $scope.decreaseQuantity = function(id) {
	            var item = dataServiceCart.cart.getItem(id);
	            if (item.quantity <= 1) {
	                return $scope.removeItem(id);
	            }
	            return dataServiceCart.cart.updateItem(id, item.quantity - 1);
	        };

	        $scope.increaseQuantity = function(id) {
	            var item = dataServiceCart.cart.getItem(id);
	            return dataServiceCart.cart.updateItem(id, item.quantity + 1);
	        }

	    }
	});

/***/ },
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	angular.module('CartModule').filter('totalCost', function(){

	    return function (data, key1, key2) {
	        // debugger;
	        if (
	            typeof (data) === 'undefined' &&
	            typeof (key1) === 'undefined' &&
	            typeof (key2) === 'undefined') {

	            return 0;
	        }

	        var sum = 0;

	        Object.keys(data).forEach(function (i) {
	            if (typeof data[i][key1] !== 'number' || typeof data[i][key2] !== 'number') { return; }
	            sum = sum + (data[i][key1] * data[i][key2]);
	        });

	        return sum;
	    }

	});

/***/ },
/* 30 */
/***/ function(module, exports) {

	angular.module('CartModule').filter('totalProducts', function(){

	    return function (data, key1, key2) {
	        // debugger;
	        if (
	            typeof (data) === 'undefined' &&
	            typeof (key1) === 'undefined') {

	            return 0;
	        }

	        var count = 0;

	        Object.keys(data).forEach(function (i) {
	            if (typeof data[i][key1] !== 'number') { return; }
	            count += data[i][key1];
	        });

	        return count;
	    }

	});

/***/ },
/* 31 */
/***/ function(module, exports) {

	angular.module('CartModule').controller('CartController', ['$log', '$scope', 'dataServiceCart',
	    function ($log, $scope, dataServiceCart) {

	        $scope.getTotal = function () {
	            return _.size(dataServiceCart.store.items);
	        };

	        $scope.store = dataServiceCart.store.items;

	        $scope.getCost = function () {

	        }
	    }]);

/***/ },
/* 32 */
/***/ function(module, exports) {

	angular.module('CartModule').service('orderService', ['$http', function ($http) {
	    return {
	        makeOrder: function(order) {
	            return $http.post('backend/order.php', order);
	        }
	    }
	}]);


/***/ },
/* 33 */
/***/ function(module, exports) {

	angular.module('CartModule').service('dataServiceCart', ['$localStorage', function ($localStorage) {

	    /**
	     * Assign localStorage to local var
	     */
	    var store = $localStorage.$default({
	        items: {}
	    });

	    /**
	     * Local methods container
	     * @type {Object}
	     */
	    var cart = {};

	    /**
	     * Get single item
	     * @param  {number} id  ID of item cart
	     * @return {object} Get only one item by id
	     */
	    cart.getItem = function (id) {
	        return store.items[id] || false;
	    };

	    /**
	     * Add item to the cart
	     * @param {number} id       ID of item cart
	     * @param {number} quantity Quantity for item in thecart
	     */
	    cart.addItem = function (id, name, price, quantity) {

	        // Check if exist already
	        if (store.items[id]) {

	            // Update name
	            store.items[id].name = name;
	            // Update price
	            store.items[id].price = price;
	            // Update quantity
	            store.items[id].quantity = Number(store.items[id].quantity) + quantity;

	        } else {

	            // Store new item in cart
	            store.items[id] = {
	                name: name,
	                price: price,
	                quantity: quantity
	            };
	        }

	        return store.items[id];
	    };

	    /**
	     * Update item of the cart
	     * @param {number} id       ID of item cart
	     * @param {number} quantity Quantity for item in thecart
	     */
	    cart.updateItem = function (id, quantity) {

	        store.items[id].quantity = quantity;

	        return store.items[id];
	    };

	    /**
	     * Remove single item
	     * @return {object} Delete only one item by id
	     */
	    cart.delItem = function (id) {
	        delete store.items[id];
	    };

	    /**
	     * Fetch all items in cart
	     * @return {object} Entire object cart
	     */
	    cart.fetchAll = function (products) {

	        return store.items;
	    };

	    /**
	     * Reset the entire cart
	     */
	    cart.resetAll = function () {
	        return store.$reset();
	    };

	    return {
	        cart: cart,
	        store: store
	    };
	}]);


/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports) {

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

/***/ },
/* 39 */
/***/ function(module, exports) {

	angular.
	module('CartModule').
	component('categoryMenu', {
	    templateUrl: 'app/catalog/components/category-menu.html',

	    controller: function ($log, $scope, shopFactory, $routeParams) {
	        $scope.categories = [];

	        shopFactory.getCategories().then(function (response) {
	            $scope.categories = response.data;
	        });
	    }
	});

/***/ },
/* 40 */
/***/ function(module, exports) {

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

/***/ },
/* 41 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);