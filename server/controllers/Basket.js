'use strict';

var utils = require('../utils/writer.js');
var Basket = require('../service/BasketService');

module.exports.addToCart = function addToCart (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var basket_id = req.swagger.params['basket_id'].value;
  var products = req.swagger.params['products'].value;
  Basket.addToCart(contentType,basket_id,products)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.basketsBasket_idDELETE = function basketsBasket_idDELETE (req, res, next) {
  var basket_id = req.swagger.params['basket_id'].value;
  Basket.basketsBasket_idDELETE(basket_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.basketsBasket_idItemsItem_idDELETE = function basketsBasket_idItemsItem_idDELETE (req, res, next) {
  var basket_id = req.swagger.params['basket_id'].value;
  var item_id = req.swagger.params['item_id'].value;
  Basket.basketsBasket_idItemsItem_idDELETE(basket_id,item_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.basketsBasket_idItemsItem_idPATCH = function basketsBasket_idItemsItem_idPATCH (req, res, next) {
  var basket_id = req.swagger.params['basket_id'].value;
  var item_id = req.swagger.params['item_id'].value;
  var product = req.swagger.params['product'].value;
  Basket.basketsBasket_idItemsItem_idPATCH(basket_id,item_id,product)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.basketsBasket_idPATCH = function basketsBasket_idPATCH (req, res, next) {
  var basket_id = req.swagger.params['basket_id'].value;
  var basketModification = req.swagger.params['basketModification'].value;
  Basket.basketsBasket_idPATCH(basket_id,basketModification)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.basketsPOST = function basketsPOST (req, res, next) {
  Basket.basketsPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCart = function getCart (req, res, next) {
  var basket_id = req.swagger.params['basket_id'].value;
  Basket.getCart(basket_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
