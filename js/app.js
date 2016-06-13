(function(){
  angular
    .module('shoppingCartApp', ['ngRoute'])
    .config(config)

    function config($routeProvider, $locationProvider){
      $routeProvider
        .when('/', {
          templateUrl: '../views/home.html', 
          controller: 'itemsController',
          controllerAs: 'vm',
        })
        .when('/checkout', {
          templateUrl: '../views/checkout.html',
          controller: 'checkoutController',
          controllerAs: 'vm'
        })
      $locationProvider.html5Mode(true);
    }
})()
