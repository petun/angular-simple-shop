angular.module('shopApp', ['ngRoute', 'CartModule', 'CatalogModule']);

require('./routing.js');
require('./cart/CartModule.js');
require('./catalog/CatalogModule.js');