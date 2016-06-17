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

        store.items[id] = quantity;

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
