angular.module('clientRoutes', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  console.log('ng darrin');
  $urlRouterProvider
    .otherwise('/');
  $stateProvider


    .state('home', {
      url: '/',
      controller: 'homeController',
      templateUrl: './app/components/home/homeView.html'
    })
    .state('link', {
      url: '/:test',
      controller: 'connectingController',
      templateUrl: './app/components/connecting/featView.html'
    });
}]);