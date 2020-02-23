'use strict'

const crypto = require('crypto')

var example = {
  basketId: null,
  pickupPoint: {
    cncStore: {
      country: 'GR',
      telephoneNumber: '+358 10 123 1123',
      distance: 1.1135200567824,
      city: 'Athens',
      postalCode: '1000AB',
      latitude: 37.9768188,
      daysToWaitForDelivery: 3,
      deliveryWindow: {
        from: 1,
        to: 1,
      },
      street: 'Ermou Street 50',
      name: 'adidas Store Athens, Ermou Street,',
      openingHours: {
        sunday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        saturday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        tuesday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        wednesday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        thursday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        friday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        monday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
      },
      id: 'GR342248,',
      state: 'MOW',
      longitude: 23.7288541,
    },
    pudoStore: {
      country: 'GR',
      telephoneNumber: '+358 10 123 1123',
      distance: 1.1135200567824,
      city: 'Athens',
      postalCode: '1000AB',
      latitude: 37.9768188,
      daysToWaitForDelivery: 3,
      deliveryWindow: {
        from: 1,
        to: 1,
      },
      street: 'Ermou Street 50',
      name: 'adidas Store Athens, Ermou Street,',
      openingHours: {
        sunday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        saturday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        tuesday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        wednesday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        thursday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        friday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
        monday: {
          endHours: 18,
          startHours: 9,
          startMinutes: 0,
          endMinutes: 30,
        },
      },
      id: 'GR342248,',
      state: 'MOW',
      longitude: 23.7288541,
    },
  },
  discountList: [
    {
      calloutMessage: 'calloutMessage',
      couponItemId: 'couponItemId',
      name: 'name',
      id: 'id',
    },
    {
      calloutMessage: 'calloutMessage',
      couponItemId: 'couponItemId',
      name: 'name',
      id: 'id',
    },
  ],
  taxBreakDown: {
    PST: 2.027123023002322,
    QST: 7.386281948385884,
    HST: 4.145608029883936,
    GST: 3.616076749251911,
  },
  creationDate: {},
  paymentInstrumentList: [
    {
      expirationYear: 7.061401241503109,
      lastFour: 'lastFour',
      maskedGiftCardNumber: 'maskedGiftCardNumber',
      balance: 9.301444243932576,
      paymentMethodId: 'paymentMethodId',
      cardType: 'cardType',
      holder: 'holder',
      id: 'id',
      expirationMonth: 2.3021358869347655,
    },
    {
      expirationYear: 7.061401241503109,
      lastFour: 'lastFour',
      maskedGiftCardNumber: 'maskedGiftCardNumber',
      balance: 9.301444243932576,
      paymentMethodId: 'paymentMethodId',
      cardType: 'cardType',
      holder: 'holder',
      id: 'id',
      expirationMonth: 2.3021358869347655,
    },
  ],
  taxCalculationMissing: true,
  totalProductCount: 0,
  products: [],
  shipmentList: [
    {
      shippingOnDate: {},
      shippingLineItem: '',
      shipmentId: 'shipmentId',
      productLineItemList: [
        {
          discountList: [
            {
              calloutMessage: 'calloutMessage',
              couponItemId: 'couponItemId',
              name: 'name',
              id: 'id',
            },
            {
              calloutMessage: 'calloutMessage',
              couponItemId: 'couponItemId',
              name: 'name',
              id: 'id',
            },
          ],
          quantity: 60,
          productId: {},
          gender: 'gender',
          color: 'color',
          canonicalProductName: 'canonicalProductName',
          availableStock: 5,
          allowedActions: {
            edit: true,
            delete: true,
            moveToWishlist: true,
          },
          personalizationFields: '{}',
          productName: 'productName',
          maxQuantityAllowed: 1,
          itemId: 'itemId',
          productImage: 'productImage',
          size: 'size',
          editLinkCustomizableProduct: 'editLinkCustomizableProduct',
          isBonusProduct: true,
          lastAdded: true,
          isFlashProduct: true,
          pricing: {
            baseUnitPrice: {},
          },
          productType: 'INLINE',
        },
        {
          discountList: [
            {
              calloutMessage: 'calloutMessage',
              couponItemId: 'couponItemId',
              name: 'name',
              id: 'id',
            },
            {
              calloutMessage: 'calloutMessage',
              couponItemId: 'couponItemId',
              name: 'name',
              id: 'id',
            },
          ],
          quantity: 60,
          productId: {},
          gender: 'gender',
          color: 'color',
          canonicalProductName: 'canonicalProductName',
          availableStock: 5,
          allowedActions: {
            edit: true,
            delete: true,
            moveToWishlist: true,
          },
          personalizationFields: '{}',
          productName: 'productName',
          maxQuantityAllowed: 1,
          itemId: 'itemId',
          productImage: 'productImage',
          size: 'size',
          editLinkCustomizableProduct: 'editLinkCustomizableProduct',
          isBonusProduct: true,
          lastAdded: true,
          isFlashProduct: true,
          pricing: {
            baseUnitPrice: {},
          },
          productType: 'INLINE',
        },
      ],
      shipmentType: 'inline',
    },
    {
      shippingOnDate: {},
      shippingLineItem: '',
      shipmentId: 'shipmentId',
      productLineItemList: [
        {
          discountList: [
            {
              calloutMessage: 'calloutMessage',
              couponItemId: 'couponItemId',
              name: 'name',
              id: 'id',
            },
            {
              calloutMessage: 'calloutMessage',
              couponItemId: 'couponItemId',
              name: 'name',
              id: 'id',
            },
          ],
          quantity: 60,
          productId: {},
          gender: 'gender',
          color: 'color',
          canonicalProductName: 'canonicalProductName',
          availableStock: 5,
          allowedActions: {
            edit: true,
            delete: true,
            moveToWishlist: true,
          },
          personalizationFields: '{}',
          productName: 'productName',
          maxQuantityAllowed: 1,
          itemId: 'itemId',
          productImage: 'productImage',
          size: 'size',
          editLinkCustomizableProduct: 'editLinkCustomizableProduct',
          isBonusProduct: true,
          lastAdded: true,
          isFlashProduct: true,
          pricing: {
            baseUnitPrice: {},
          },
          productType: 'INLINE',
        },
        {
          discountList: [
            {
              calloutMessage: 'calloutMessage',
              couponItemId: 'couponItemId',
              name: 'name',
              id: 'id',
            },
            {
              calloutMessage: 'calloutMessage',
              couponItemId: 'couponItemId',
              name: 'name',
              id: 'id',
            },
          ],
          quantity: 60,
          productId: {},
          gender: 'gender',
          color: 'color',
          canonicalProductName: 'canonicalProductName',
          availableStock: 5,
          allowedActions: {
            edit: true,
            delete: true,
            moveToWishlist: true,
          },
          personalizationFields: '{}',
          productName: 'productName',
          maxQuantityAllowed: 1,
          itemId: 'itemId',
          productImage: 'productImage',
          size: 'size',
          editLinkCustomizableProduct: 'editLinkCustomizableProduct',
          isBonusProduct: true,
          lastAdded: true,
          isFlashProduct: true,
          pricing: {
            baseUnitPrice: {},
          },
          productType: 'INLINE',
        },
      ],
      shipmentType: 'inline',
    },
  ],
  taxationPolicy: 'net',
  shippingAddressValidation: {
    jobToken: 'jobToken',
    isValid: true,
    jobTokenRemainingUsage: 5.637376656633329,
    suggestionList: [
      {
        zipCode: 'zipCode',
        province: 'province',
        formattedAddress: 'formattedAddress',
        city: 'city',
        street: 'street',
        houseNumber: 'houseNumber',
      },
      {
        zipCode: 'zipCode',
        province: 'province',
        formattedAddress: 'formattedAddress',
        city: 'city',
        street: 'street',
        houseNumber: 'houseNumber',
      },
    ],
    isCorrected: true,
  },
  messageList: [
    {
      messageType: 'INFO',
      details: {
        availableQuantity: 1.4894159098541704,
        articleNumber: 'articleNumber',
        shipmentId: 'shipmentId',
        requestedQuantity: 1.0246457001441578,
        outOfStockLetters: ['outOfStockLetters', 'outOfStockLetters'],
        outOfStockNumbers: ['outOfStockNumbers', 'outOfStockNumbers'],
        badgeMissing: true,
        maximumQuantity: 1.2315135367772556,
      },
      type: 'type',
    },
    {
      messageType: 'INFO',
      details: {
        availableQuantity: 1.4894159098541704,
        articleNumber: 'articleNumber',
        shipmentId: 'shipmentId',
        requestedQuantity: 1.0246457001441578,
        outOfStockLetters: ['outOfStockLetters', 'outOfStockLetters'],
        outOfStockNumbers: ['outOfStockNumbers', 'outOfStockNumbers'],
        badgeMissing: true,
        maximumQuantity: 1.2315135367772556,
      },
      type: 'type',
    },
  ],
  couponList: [
    {
      valid: true,
      id: 'id',
      message: 'message',
      couponCode: 'couponCode',
      statusCode: 'coupon_code_already_in_basket',
    },
    {
      valid: true,
      id: 'id',
      message: 'message',
      couponCode: 'couponCode',
      statusCode: 'coupon_code_already_in_basket',
    },
  ],
  resourceState: 'resourceState',
  shippingAddress: {
    country: 'country',
    lastName: 'lastName',
    address2: 'address2',
    city: 'city',
    address1: 'address1',
    island: 'island',
    companyName: 'companyName',
    houseNumber: 'houseNumber',
    zipcode: 'zipcode',
    firstName: 'firstName',
    countyProvince: 'countyProvince',
    phoneNumber: 'phoneNumber',
    suburb: 'suburb',
    id: 'id',
    useAsBillingAddress: true,
    apartmentNumber: 'apartmentNumber',
  },
  flashTimeLeft: 6.84685269835264,
  currency: 'currency',
  billingAddress: {
    country: 'country',
    lastName: 'lastName',
    address2: 'address2',
    city: 'city',
    address1: 'address1',
    island: 'island',
    companyName: 'companyName',
    houseNumber: 'houseNumber',
    zipcode: 'zipcode',
    firstName: 'firstName',
    countyProvince: 'countyProvince',
    suburb: 'suburb',
    stateCode: {},
    id: 'id',
    apartmentNumber: 'apartmentNumber',
  },
  checkoutId: 'checkoutId',
  segmentationId: 'segmentationId',
  pricing: {},
  taxBreakdownList: [
    {
      name: 'name',
      value: 'value',
    },
    {
      name: 'name',
      value: 'value',
    },
  ],
  customer: '',
}

/**
 * Allows the user to add a product to the cart
 *
 * contentType String
 * basket_id String It represents basket unique identifier
 * products MultipleProductToAdd The product to be added
 * returns Basket
 **/
exports.addToCart = function(contentType, basket_id, products) {
  return new Promise(function(resolve, reject) {
    if (basket_id === example.basketId) {
      example.products = products
      example.totalProductCount = products.reduce(
        (total, product) => total + product.quantity,
        0
      )

      resolve(example)
    } else if (example.basketId) {
      reject({
        error: 'Baskets limit reached',
      })
    } else {
      resolve()
    }
  })
}

/**
 * delete the given basket.
 *
 * basket_id String It represents basket unique identifier
 * no response value expected for this operation
 **/
exports.basketsBasket_idDELETE = function(basket_id) {
  return new Promise(function(resolve, reject) {
    if (basket_id && basket_id === example.basketId) {
      example.basketId = null
      example.products = []
      example.totalProductCount = 0

      resolve({
        message: 'Basket deleted',
      })
    } else {
      reject()
    }
  })
}

/**
 * Allows the user to remove product from the cart
 *
 * basket_id String It represents basket unique identifier
 * item_id String identify unique product line item id in the cart
 * returns Basket
 **/
exports.basketsBasket_idItemsItem_idDELETE = function(basket_id, item_id) {
  return new Promise(function(resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      basketId: '00000000000000000000000000',
      pickupPoint: {
        cncStore: {
          country: 'GR',
          telephoneNumber: '+358 10 123 1123',
          distance: 1.1135200567824,
          city: 'Athens',
          postalCode: '1000AB',
          latitude: 37.9768188,
          daysToWaitForDelivery: 3,
          deliveryWindow: {
            from: 1,
            to: 1,
          },
          street: 'Ermou Street 50',
          name: 'adidas Store Athens, Ermou Street,',
          openingHours: {
            sunday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            saturday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            tuesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            wednesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            thursday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            friday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            monday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
          },
          id: 'GR342248,',
          state: 'MOW',
          longitude: 23.7288541,
        },
        pudoStore: {
          country: 'GR',
          telephoneNumber: '+358 10 123 1123',
          distance: 1.1135200567824,
          city: 'Athens',
          postalCode: '1000AB',
          latitude: 37.9768188,
          daysToWaitForDelivery: 3,
          deliveryWindow: {
            from: 1,
            to: 1,
          },
          street: 'Ermou Street 50',
          name: 'adidas Store Athens, Ermou Street,',
          openingHours: {
            sunday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            saturday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            tuesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            wednesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            thursday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            friday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            monday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
          },
          id: 'GR342248,',
          state: 'MOW',
          longitude: 23.7288541,
        },
      },
      discountList: [
        {
          calloutMessage: 'calloutMessage',
          couponItemId: 'couponItemId',
          name: 'name',
          id: 'id',
        },
        {
          calloutMessage: 'calloutMessage',
          couponItemId: 'couponItemId',
          name: 'name',
          id: 'id',
        },
      ],
      taxBreakDown: {
        PST: 2.027123023002322,
        QST: 7.386281948385884,
        HST: 4.145608029883936,
        GST: 3.616076749251911,
      },
      creationDate: {},
      paymentInstrumentList: [
        {
          expirationYear: 7.061401241503109,
          lastFour: 'lastFour',
          maskedGiftCardNumber: 'maskedGiftCardNumber',
          balance: 9.301444243932576,
          paymentMethodId: 'paymentMethodId',
          cardType: 'cardType',
          holder: 'holder',
          id: 'id',
          expirationMonth: 2.3021358869347655,
        },
        {
          expirationYear: 7.061401241503109,
          lastFour: 'lastFour',
          maskedGiftCardNumber: 'maskedGiftCardNumber',
          balance: 9.301444243932576,
          paymentMethodId: 'paymentMethodId',
          cardType: 'cardType',
          holder: 'holder',
          id: 'id',
          expirationMonth: 2.3021358869347655,
        },
      ],
      taxCalculationMissing: true,
      totalProductCount: 0,
      shipmentList: [
        {
          shippingOnDate: {},
          shippingLineItem: '',
          shipmentId: 'shipmentId',
          productLineItemList: [
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
          ],
          shipmentType: 'inline',
        },
        {
          shippingOnDate: {},
          shippingLineItem: '',
          shipmentId: 'shipmentId',
          productLineItemList: [
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
          ],
          shipmentType: 'inline',
        },
      ],
      taxationPolicy: 'net',
      shippingAddressValidation: {
        jobToken: 'jobToken',
        isValid: true,
        jobTokenRemainingUsage: 5.637376656633329,
        suggestionList: [
          {
            zipCode: 'zipCode',
            province: 'province',
            formattedAddress: 'formattedAddress',
            city: 'city',
            street: 'street',
            houseNumber: 'houseNumber',
          },
          {
            zipCode: 'zipCode',
            province: 'province',
            formattedAddress: 'formattedAddress',
            city: 'city',
            street: 'street',
            houseNumber: 'houseNumber',
          },
        ],
        isCorrected: true,
      },
      messageList: [
        {
          messageType: 'INFO',
          details: {
            availableQuantity: 1.4894159098541704,
            articleNumber: 'articleNumber',
            shipmentId: 'shipmentId',
            requestedQuantity: 1.0246457001441578,
            outOfStockLetters: ['outOfStockLetters', 'outOfStockLetters'],
            outOfStockNumbers: ['outOfStockNumbers', 'outOfStockNumbers'],
            badgeMissing: true,
            maximumQuantity: 1.2315135367772556,
          },
          type: 'type',
        },
        {
          messageType: 'INFO',
          details: {
            availableQuantity: 1.4894159098541704,
            articleNumber: 'articleNumber',
            shipmentId: 'shipmentId',
            requestedQuantity: 1.0246457001441578,
            outOfStockLetters: ['outOfStockLetters', 'outOfStockLetters'],
            outOfStockNumbers: ['outOfStockNumbers', 'outOfStockNumbers'],
            badgeMissing: true,
            maximumQuantity: 1.2315135367772556,
          },
          type: 'type',
        },
      ],
      couponList: [
        {
          valid: true,
          id: 'id',
          message: 'message',
          couponCode: 'couponCode',
          statusCode: 'coupon_code_already_in_basket',
        },
        {
          valid: true,
          id: 'id',
          message: 'message',
          couponCode: 'couponCode',
          statusCode: 'coupon_code_already_in_basket',
        },
      ],
      resourceState: 'resourceState',
      shippingAddress: {
        country: 'country',
        lastName: 'lastName',
        address2: 'address2',
        city: 'city',
        address1: 'address1',
        island: 'island',
        companyName: 'companyName',
        houseNumber: 'houseNumber',
        zipcode: 'zipcode',
        firstName: 'firstName',
        countyProvince: 'countyProvince',
        phoneNumber: 'phoneNumber',
        suburb: 'suburb',
        id: 'id',
        useAsBillingAddress: true,
        apartmentNumber: 'apartmentNumber',
      },
      flashTimeLeft: 6.84685269835264,
      currency: 'currency',
      billingAddress: {
        country: 'country',
        lastName: 'lastName',
        address2: 'address2',
        city: 'city',
        address1: 'address1',
        island: 'island',
        companyName: 'companyName',
        houseNumber: 'houseNumber',
        zipcode: 'zipcode',
        firstName: 'firstName',
        countyProvince: 'countyProvince',
        suburb: 'suburb',
        stateCode: {},
        id: 'id',
        apartmentNumber: 'apartmentNumber',
      },
      checkoutId: 'checkoutId',
      segmentationId: 'segmentationId',
      pricing: {},
      taxBreakdownList: [
        {
          name: 'name',
          value: 'value',
        },
        {
          name: 'name',
          value: 'value',
        },
      ],
      customer: '',
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Allow the user to update product line item of given basket
 *
 * basket_id String It represents basket unique identifier
 * item_id String identify unique product line item id in the cart
 * product ProductToAdd The product to be updated
 * returns Basket
 **/
exports.basketsBasket_idItemsItem_idPATCH = function(
  basket_id,
  item_id,
  product
) {
  return new Promise(function(resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      basketId: '00000000000000000000000000',
      pickupPoint: {
        cncStore: {
          country: 'GR',
          telephoneNumber: '+358 10 123 1123',
          distance: 1.1135200567824,
          city: 'Athens',
          postalCode: '1000AB',
          latitude: 37.9768188,
          daysToWaitForDelivery: 3,
          deliveryWindow: {
            from: 1,
            to: 1,
          },
          street: 'Ermou Street 50',
          name: 'adidas Store Athens, Ermou Street,',
          openingHours: {
            sunday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            saturday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            tuesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            wednesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            thursday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            friday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            monday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
          },
          id: 'GR342248,',
          state: 'MOW',
          longitude: 23.7288541,
        },
        pudoStore: {
          country: 'GR',
          telephoneNumber: '+358 10 123 1123',
          distance: 1.1135200567824,
          city: 'Athens',
          postalCode: '1000AB',
          latitude: 37.9768188,
          daysToWaitForDelivery: 3,
          deliveryWindow: {
            from: 1,
            to: 1,
          },
          street: 'Ermou Street 50',
          name: 'adidas Store Athens, Ermou Street,',
          openingHours: {
            sunday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            saturday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            tuesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            wednesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            thursday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            friday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            monday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
          },
          id: 'GR342248,',
          state: 'MOW',
          longitude: 23.7288541,
        },
      },
      discountList: [
        {
          calloutMessage: 'calloutMessage',
          couponItemId: 'couponItemId',
          name: 'name',
          id: 'id',
        },
        {
          calloutMessage: 'calloutMessage',
          couponItemId: 'couponItemId',
          name: 'name',
          id: 'id',
        },
      ],
      taxBreakDown: {
        PST: 2.027123023002322,
        QST: 7.386281948385884,
        HST: 4.145608029883936,
        GST: 3.616076749251911,
      },
      creationDate: {},
      paymentInstrumentList: [
        {
          expirationYear: 7.061401241503109,
          lastFour: 'lastFour',
          maskedGiftCardNumber: 'maskedGiftCardNumber',
          balance: 9.301444243932576,
          paymentMethodId: 'paymentMethodId',
          cardType: 'cardType',
          holder: 'holder',
          id: 'id',
          expirationMonth: 2.3021358869347655,
        },
        {
          expirationYear: 7.061401241503109,
          lastFour: 'lastFour',
          maskedGiftCardNumber: 'maskedGiftCardNumber',
          balance: 9.301444243932576,
          paymentMethodId: 'paymentMethodId',
          cardType: 'cardType',
          holder: 'holder',
          id: 'id',
          expirationMonth: 2.3021358869347655,
        },
      ],
      taxCalculationMissing: true,
      totalProductCount: 0,
      shipmentList: [
        {
          shippingOnDate: {},
          shippingLineItem: '',
          shipmentId: 'shipmentId',
          productLineItemList: [
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
          ],
          shipmentType: 'inline',
        },
        {
          shippingOnDate: {},
          shippingLineItem: '',
          shipmentId: 'shipmentId',
          productLineItemList: [
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
          ],
          shipmentType: 'inline',
        },
      ],
      taxationPolicy: 'net',
      shippingAddressValidation: {
        jobToken: 'jobToken',
        isValid: true,
        jobTokenRemainingUsage: 5.637376656633329,
        suggestionList: [
          {
            zipCode: 'zipCode',
            province: 'province',
            formattedAddress: 'formattedAddress',
            city: 'city',
            street: 'street',
            houseNumber: 'houseNumber',
          },
          {
            zipCode: 'zipCode',
            province: 'province',
            formattedAddress: 'formattedAddress',
            city: 'city',
            street: 'street',
            houseNumber: 'houseNumber',
          },
        ],
        isCorrected: true,
      },
      messageList: [
        {
          messageType: 'INFO',
          details: {
            availableQuantity: 1.4894159098541704,
            articleNumber: 'articleNumber',
            shipmentId: 'shipmentId',
            requestedQuantity: 1.0246457001441578,
            outOfStockLetters: ['outOfStockLetters', 'outOfStockLetters'],
            outOfStockNumbers: ['outOfStockNumbers', 'outOfStockNumbers'],
            badgeMissing: true,
            maximumQuantity: 1.2315135367772556,
          },
          type: 'type',
        },
        {
          messageType: 'INFO',
          details: {
            availableQuantity: 1.4894159098541704,
            articleNumber: 'articleNumber',
            shipmentId: 'shipmentId',
            requestedQuantity: 1.0246457001441578,
            outOfStockLetters: ['outOfStockLetters', 'outOfStockLetters'],
            outOfStockNumbers: ['outOfStockNumbers', 'outOfStockNumbers'],
            badgeMissing: true,
            maximumQuantity: 1.2315135367772556,
          },
          type: 'type',
        },
      ],
      couponList: [
        {
          valid: true,
          id: 'id',
          message: 'message',
          couponCode: 'couponCode',
          statusCode: 'coupon_code_already_in_basket',
        },
        {
          valid: true,
          id: 'id',
          message: 'message',
          couponCode: 'couponCode',
          statusCode: 'coupon_code_already_in_basket',
        },
      ],
      resourceState: 'resourceState',
      shippingAddress: {
        country: 'country',
        lastName: 'lastName',
        address2: 'address2',
        city: 'city',
        address1: 'address1',
        island: 'island',
        companyName: 'companyName',
        houseNumber: 'houseNumber',
        zipcode: 'zipcode',
        firstName: 'firstName',
        countyProvince: 'countyProvince',
        phoneNumber: 'phoneNumber',
        suburb: 'suburb',
        id: 'id',
        useAsBillingAddress: true,
        apartmentNumber: 'apartmentNumber',
      },
      flashTimeLeft: 6.84685269835264,
      currency: 'currency',
      billingAddress: {
        country: 'country',
        lastName: 'lastName',
        address2: 'address2',
        city: 'city',
        address1: 'address1',
        island: 'island',
        companyName: 'companyName',
        houseNumber: 'houseNumber',
        zipcode: 'zipcode',
        firstName: 'firstName',
        countyProvince: 'countyProvince',
        suburb: 'suburb',
        stateCode: {},
        id: 'id',
        apartmentNumber: 'apartmentNumber',
      },
      checkoutId: 'checkoutId',
      segmentationId: 'segmentationId',
      pricing: {},
      taxBreakdownList: [
        {
          name: 'name',
          value: 'value',
        },
        {
          name: 'name',
          value: 'value',
        },
      ],
      customer: '',
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * modifies some basket properties with the given content
 *
 * basket_id String It represents basket unique identifier
 * basketModification BasketModification
 * returns Basket
 **/
exports.basketsBasket_idPATCH = function(basket_id, basketModification) {
  return new Promise(function(resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      basketId: '00000000000000000000000000',
      pickupPoint: {
        cncStore: {
          country: 'GR',
          telephoneNumber: '+358 10 123 1123',
          distance: 1.1135200567824,
          city: 'Athens',
          postalCode: '1000AB',
          latitude: 37.9768188,
          daysToWaitForDelivery: 3,
          deliveryWindow: {
            from: 1,
            to: 1,
          },
          street: 'Ermou Street 50',
          name: 'adidas Store Athens, Ermou Street,',
          openingHours: {
            sunday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            saturday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            tuesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            wednesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            thursday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            friday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            monday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
          },
          id: 'GR342248,',
          state: 'MOW',
          longitude: 23.7288541,
        },
        pudoStore: {
          country: 'GR',
          telephoneNumber: '+358 10 123 1123',
          distance: 1.1135200567824,
          city: 'Athens',
          postalCode: '1000AB',
          latitude: 37.9768188,
          daysToWaitForDelivery: 3,
          deliveryWindow: {
            from: 1,
            to: 1,
          },
          street: 'Ermou Street 50',
          name: 'adidas Store Athens, Ermou Street,',
          openingHours: {
            sunday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            saturday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            tuesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            wednesday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            thursday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            friday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
            monday: {
              endHours: 18,
              startHours: 9,
              startMinutes: 0,
              endMinutes: 30,
            },
          },
          id: 'GR342248,',
          state: 'MOW',
          longitude: 23.7288541,
        },
      },
      discountList: [
        {
          calloutMessage: 'calloutMessage',
          couponItemId: 'couponItemId',
          name: 'name',
          id: 'id',
        },
        {
          calloutMessage: 'calloutMessage',
          couponItemId: 'couponItemId',
          name: 'name',
          id: 'id',
        },
      ],
      taxBreakDown: {
        PST: 2.027123023002322,
        QST: 7.386281948385884,
        HST: 4.145608029883936,
        GST: 3.616076749251911,
      },
      creationDate: {},
      paymentInstrumentList: [
        {
          expirationYear: 7.061401241503109,
          lastFour: 'lastFour',
          maskedGiftCardNumber: 'maskedGiftCardNumber',
          balance: 9.301444243932576,
          paymentMethodId: 'paymentMethodId',
          cardType: 'cardType',
          holder: 'holder',
          id: 'id',
          expirationMonth: 2.3021358869347655,
        },
        {
          expirationYear: 7.061401241503109,
          lastFour: 'lastFour',
          maskedGiftCardNumber: 'maskedGiftCardNumber',
          balance: 9.301444243932576,
          paymentMethodId: 'paymentMethodId',
          cardType: 'cardType',
          holder: 'holder',
          id: 'id',
          expirationMonth: 2.3021358869347655,
        },
      ],
      taxCalculationMissing: true,
      totalProductCount: 0,
      shipmentList: [
        {
          shippingOnDate: {},
          shippingLineItem: '',
          shipmentId: 'shipmentId',
          productLineItemList: [
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
          ],
          shipmentType: 'inline',
        },
        {
          shippingOnDate: {},
          shippingLineItem: '',
          shipmentId: 'shipmentId',
          productLineItemList: [
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
            {
              discountList: [
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
                {
                  calloutMessage: 'calloutMessage',
                  couponItemId: 'couponItemId',
                  name: 'name',
                  id: 'id',
                },
              ],
              quantity: 60,
              productId: {},
              gender: 'gender',
              color: 'color',
              canonicalProductName: 'canonicalProductName',
              availableStock: 5,
              allowedActions: {
                edit: true,
                delete: true,
                moveToWishlist: true,
              },
              personalizationFields: '{}',
              productName: 'productName',
              maxQuantityAllowed: 1,
              itemId: 'itemId',
              productImage: 'productImage',
              size: 'size',
              editLinkCustomizableProduct: 'editLinkCustomizableProduct',
              isBonusProduct: true,
              lastAdded: true,
              isFlashProduct: true,
              pricing: {
                baseUnitPrice: {},
              },
              productType: 'INLINE',
            },
          ],
          shipmentType: 'inline',
        },
      ],
      taxationPolicy: 'net',
      shippingAddressValidation: {
        jobToken: 'jobToken',
        isValid: true,
        jobTokenRemainingUsage: 5.637376656633329,
        suggestionList: [
          {
            zipCode: 'zipCode',
            province: 'province',
            formattedAddress: 'formattedAddress',
            city: 'city',
            street: 'street',
            houseNumber: 'houseNumber',
          },
          {
            zipCode: 'zipCode',
            province: 'province',
            formattedAddress: 'formattedAddress',
            city: 'city',
            street: 'street',
            houseNumber: 'houseNumber',
          },
        ],
        isCorrected: true,
      },
      messageList: [
        {
          messageType: 'INFO',
          details: {
            availableQuantity: 1.4894159098541704,
            articleNumber: 'articleNumber',
            shipmentId: 'shipmentId',
            requestedQuantity: 1.0246457001441578,
            outOfStockLetters: ['outOfStockLetters', 'outOfStockLetters'],
            outOfStockNumbers: ['outOfStockNumbers', 'outOfStockNumbers'],
            badgeMissing: true,
            maximumQuantity: 1.2315135367772556,
          },
          type: 'type',
        },
        {
          messageType: 'INFO',
          details: {
            availableQuantity: 1.4894159098541704,
            articleNumber: 'articleNumber',
            shipmentId: 'shipmentId',
            requestedQuantity: 1.0246457001441578,
            outOfStockLetters: ['outOfStockLetters', 'outOfStockLetters'],
            outOfStockNumbers: ['outOfStockNumbers', 'outOfStockNumbers'],
            badgeMissing: true,
            maximumQuantity: 1.2315135367772556,
          },
          type: 'type',
        },
      ],
      couponList: [
        {
          valid: true,
          id: 'id',
          message: 'message',
          couponCode: 'couponCode',
          statusCode: 'coupon_code_already_in_basket',
        },
        {
          valid: true,
          id: 'id',
          message: 'message',
          couponCode: 'couponCode',
          statusCode: 'coupon_code_already_in_basket',
        },
      ],
      resourceState: 'resourceState',
      shippingAddress: {
        country: 'country',
        lastName: 'lastName',
        address2: 'address2',
        city: 'city',
        address1: 'address1',
        island: 'island',
        companyName: 'companyName',
        houseNumber: 'houseNumber',
        zipcode: 'zipcode',
        firstName: 'firstName',
        countyProvince: 'countyProvince',
        phoneNumber: 'phoneNumber',
        suburb: 'suburb',
        id: 'id',
        useAsBillingAddress: true,
        apartmentNumber: 'apartmentNumber',
      },
      flashTimeLeft: 6.84685269835264,
      currency: 'currency',
      billingAddress: {
        country: 'country',
        lastName: 'lastName',
        address2: 'address2',
        city: 'city',
        address1: 'address1',
        island: 'island',
        companyName: 'companyName',
        houseNumber: 'houseNumber',
        zipcode: 'zipcode',
        firstName: 'firstName',
        countyProvince: 'countyProvince',
        suburb: 'suburb',
        stateCode: {},
        id: 'id',
        apartmentNumber: 'apartmentNumber',
      },
      checkoutId: 'checkoutId',
      segmentationId: 'segmentationId',
      pricing: {},
      taxBreakdownList: [
        {
          name: 'name',
          value: 'value',
        },
        {
          name: 'name',
          value: 'value',
        },
      ],
      customer: '',
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * creates a new basket
 *
 * returns Basket
 **/
exports.basketsPOST = function() {
  return new Promise(function(resolve, reject) {
    const currentDate = new Date().valueOf().toString()
    const random = Math.random().toString()

    example.basketId = `${crypto
      .createHash('sha1')
      .update(currentDate + random)
      .digest('hex')}`

    example.basketId = example.basketId.substring(0, 26)

    resolve(example)
  })
}

/**
 * DEPRECATED - returns the cart identified by the id to the caller
 *
 * basket_id String It represents basket unique identifier
 * returns Basket
 **/
exports.getCart = function(basket_id) {
  return new Promise(function(resolve, reject) {
    if (basket_id === example.basketId) {
      resolve(example)
    } else {
      reject({
        error: 'Wrong basket id',
      })
    }
  })
}
