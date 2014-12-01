var AngularApp = angular.module('AngularApp', ['ngRoute', 'ui.bootstrap']);

AngularApp.controller('LandingPageController', LandingPageController);
AngularApp.controller('LoginController', LoginController);
AngularApp.controller('RegisterController', RegisterController);
AngularApp.controller('EmployeeIndexController', EmployeeIndexController);

AngularApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularApp.factory('LoginFactory', LoginFactory);
AngularApp.factory('RegistrationFactory', RegistrationFactory);
AngularApp.factory('EmployeeFactory', EmployeeFactory);

//http://www.codeproject.com/Articles/843044/Getting-started-with-AngularJS-and-ASP-NET-MVC-The
var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one',
            //controller: EmployeeController
        })
         .when('/routeTwo/:donuts', {
             templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
         })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        })
        .when('/EmployeeIndex', {
            templateUrl: '/employee/Index',
            controller: EmployeeIndexController
        })
        .when('/EmployeeDetails', {
            templateUrl: '/employee/Details',
            //templateUrl: function (params) { return '/employee/Details?id=' + params.id; }
            //controller: EmployeeController
        })
        .when('/EmployeeCreate', {
            templateUrl: '/employee/Create',
            // controller: EmployeeController
        })
        .when('/EmployeeDelete', {
            templateUrl: '/employee/Delete',
            // controller: EmployeeController
        })
        .when('/EmployeeEdit', {
            templateUrl: '/employee/Edit',
            // controller: EmployeeController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}


//configFunction.$inject = ['$routeProvider'];
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

AngularApp.config(configFunction);