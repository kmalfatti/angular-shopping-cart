  (function(){
    angular
      .module('shoppingCartApp')
      .controller('itemsController', itemsController)
      .controller('checkoutController', checkoutController)

      function itemsController(itemsService, checkoutService){
        var vm = this;
        vm.items = itemsService;
        vm.addToCart = function(item, quantity){
          checkoutService.addToCart(item, quantity)
        }
        vm.getTotal = function(){
          return checkoutService.total();
        }
        
      }
      function checkoutController(checkoutService){
        var vm = this;
        vm.cart = checkoutService.cart;
        vm.getTotal = function(){
          return checkoutService.total();
        }
        vm.updateQuantity = function(item, newQuantity){
          newQuantity = Number(newQuantity)
          if (Number.isInteger(newQuantity)) {
          return checkoutService.update(item, newQuantity)
          }
        }
        vm.removeItem = function(vm, item){
          return checkoutService.removeItem(vm, item)

        }
      }

    itemsController.$inject = ['itemsService', 'checkoutService']
    checkoutController.$inject = ['checkoutService']

  })()