angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('drift', {
    url: '/home',
    templateUrl: 'templates/drift.html',
    controller: 'driftCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('search_address', {
    url: '/search_address',
    templateUrl: 'templates/search_address.html',
    controller: 'search_addressCtrl'
  })

  .state('social_drift', {
    url: '/page5',
    templateUrl: 'templates/social_drift.html',
    controller: 'social_driftCtrl'
  })

  .state('billingInfo', {
    url: '/billing',
    templateUrl: 'templates/billingInfo.html',
    controller: 'billingInfoCtrl'
  })

$urlRouterProvider.otherwise('/home')

  

});