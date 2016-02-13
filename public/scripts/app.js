'use strict';

var app = angular
    .module('myApp', [
        'ui.router',
        'ngMaterial'
    ])


.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('404');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('main', {
        url: '/',
        templateUrl: 'views/main.ejs',
        controller: 'mainCtrl'
    })

	// here should be notFound state
  	.state('404', {
        url: '/404',
        templateUrl: 'views/404.ejs',
        controller: 'notFoundCtrl'
    })


    // ABOUT PAGE =================================
    .state('about', {
        // For future use
    });
})
