angular.module('CartModule', ['ngStorage']);

require('./directives/addToCart.js');

require('./services/order.js');
require('./services/cart.js');

require('./controllers/CartCtrl.js');
require('./components/cartProducts.js');

require('./components/order.js');
require('./components/orderSuccess.js');

require('./filters/totalCost.js');
require('./filters/totalProducts.js');