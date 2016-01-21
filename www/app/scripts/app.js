'use strict';

/**
 * @ngdoc overview
 * @name wwwApp
 * @description
 * # wwwApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.tree'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      }).when('/hello', {
        templateUrl: 'views/hello.html',
        controller: 'HelloCtrl',
        controllerAs: 'hello'
      }).when('/tree', {
        templateUrl: 'views/tree.html',
        controller: 'TreeCtrl',
        controllerAs: 'tree'
      }).when('/quartiers', {
        templateUrl: 'views/quartiers.html',
        controller: 'QuartierCtrl',
        controllerAs: 'qq'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
