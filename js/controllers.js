  (function(){
    angular
      .module('shoppingCartApp')
      .controller('itemsController', itemsController)
      .controller('checkoutController', checkoutController)

      function itemsController(itemsService, checkoutService){
        // console.log(itemsService)
        var vm = this;
        vm.items = itemsService;
        vm.addToCart = function(item, quantity){
          // console.log(item, quantity)
          checkoutService.addToCart(item, quantity)
        }
        vm.getTotal = function(){
          // console.log('controllerVM')
          return checkoutService.total();
        }
      }
      function checkoutController(checkoutService){
        var vm = this;
        vm.cart = checkoutService.cart;
        // console.log('cko', checkoutService.cart)
        vm.getTotal = function(vm){
          return checkoutService.total(vm);
        }
        vm.updateQuantity = function(item, newQuantity){
          // console.log(Number.isInteger(newQuantity))
          newQuantity = Number(newQuantity)
          if (Number.isInteger(newQuantity)) {
          console.log(item, Number(newQuantity))
          return checkoutService.update(item, newQuantity)
          }
        }
        vm.removeItem = function(vm, item){
          console.log('Hey')
          return checkoutService.removeItem(vm, item)

        }
      }

    itemsController.$inject = ['itemsService', 'checkoutService']
    checkoutController.$inject = ['checkoutService']

  })()