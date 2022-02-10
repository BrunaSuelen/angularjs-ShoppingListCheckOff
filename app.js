(function() {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  // Controller ToBuyController
  ToBuyController.$inject = ['$scope'];
  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController($scope, ShoppingListCheckOffService) {
    // $scope.lunch = '';
    // $scope.message = '';

    // $scope.checkIfTooMuch = function() {
    //   const LUNCH_ITEMS = $scope.separateLunchItems();

    //   if (!LUNCH_ITEMS.length) {
    //     return $scope.message = 'Please enter data first';
    //   }

    //   $scope.message = LUNCH_ITEMS.length <= 3 
    //     ? 'Enjoy!'
    //     : 'Too much!';
    // }

    // $scope.separateLunchItems = function() {
    //   return $scope.lunch
    //     .split(' ')
    //     .join('')
    //     .split(',')
    //     .filter(function(item) {
    //       return item != '' && item != ' ';
    //     });
    // }
  }


  // Controller AlreadyBoughtController
  AlreadyBoughtController.$inject = ['$scope'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {

  }


  // Service ShoppingListCheckOffService
  function ShoppingListCheckOffService() {
    this.addItem = function() {

    }
  }
}
)()
