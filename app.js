(function() {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);



  // Controller ToBuyController
  ToBuyController.$inject = [ 'ShoppingListCheckOffService' ];

  function ToBuyController(ShoppingListCheckOffService) {
    this.buyItem = function(item) {
      ShoppingListCheckOffService.addItem(item);
      ShoppingListCheckOffService.removeItem(item.name);
    }
 
    this.getToBuy = function () {
      return ShoppingListCheckOffService.toBuy;
    }
  }



  // Controller AlreadyBoughtController
  AlreadyBoughtController.$inject = [ 'ShoppingListCheckOffService' ];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.getAlredyBought = function() {
      return ShoppingListCheckOffService.alreadyBought;
    }
  }



  // Service ShoppingListCheckOffService
  function ShoppingListCheckOffService() {
    this.alreadyBought = [];

    this.toBuy = [
      { name: 'Cookie', quantity: 2 },
      { name: 'Apple', quantity: 5 },
      { name: 'Watermelon', quantity: 1 },
      { name: 'Meat', quantity: 3 },
      { name: 'Cheetos', quantity: 10 }
    ];

    this.addItem = function(item) {
      this.alreadyBought.push(item);
    }

    this.removeItem = function(name) {
      this.toBuy = this.toBuy.filter(item => item.name !== name)
    }
  }
}
)()
