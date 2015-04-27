(function(angular) {
  'use strict';
angular.module('finance1', [])
  .factory('currencyConverter', function() {
    var currencies = ['USD', 'EUR', 'CNY', 'RS'];
    var usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09,
      RS: 60.00
    };
    var convert = function (amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };

    return {
      currencies: currencies,
      convert: convert
    };
  });
})(window.angular);