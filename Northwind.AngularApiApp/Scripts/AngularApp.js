var AngularApp = angular.module('AngularApp', ['ngRoute', 'ui.bootstrap']);

AngularApp.controller('LandingPageController', LandingPageController);
AngularApp.controller('LoginController', LoginController);
AngularApp.controller('RegisterController', RegisterController);
AngularApp.controller('EmployeeIndexController', EmployeeIndexController);
AngularApp.controller('EmployeeDetailController', EmployeeDetailController);
AngularApp.controller('EmployeeEditController', EmployeeEditController);
AngularApp.controller('EmployeeCreateController', EmployeeCreateController);
AngularApp.controller('EmployeeDeleteController', EmployeeDeleteController);
AngularApp.controller('EmployeeIndexCtrl', EmployeeIndexCtrl);


AngularApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularApp.factory('LoginFactory', LoginFactory);
AngularApp.factory('RegistrationFactory', RegistrationFactory);
AngularApp.factory('EmployeeFactory', EmployeeFactory);
AngularApp.factory('EmployeeService', EmployeeService);

//http://www.codeproject.com/Articles/843044/Getting-started-with-AngularJS-and-ASP-NET-MVC-The
var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $routeProvider.
        //when('/routeOne', {
        //    templateUrl: 'routesDemo/one',
        //    //controller: EmployeeController
        //})
        // .when('/routeTwo/:donuts', {
        //     templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        // })
        //.when('/routeThree', {
        //    templateUrl: 'routesDemo/three'
        //})
        when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        })
        .when('/EmployeeIndex', {
            templateUrl: '/Scripts/Views/employee/Index',
            controller: EmployeeIndexController
        })
        .when('/EmployeeDetail/:id', {
            //templateUrl: '/employee/Detail',
            templateUrl: '/Scripts/Views/employee/Detail',
            //templateUrl: '/Detail',
            //templateUrl: function (params) { return 'Scripts/Views/employee/Detail/id=' + params.id; },
            controller: EmployeeDetailController
        })
        .when('/EmployeeEdit/:id', {
            templateUrl: '/Scripts/Views/employee/Edit',
            controller: EmployeeEditController
        })
        .when('/EmployeeCreate', {
            templateUrl: '/Scripts/Views/employee/Create',
            controller: EmployeeCreateController
        })
        .when('/EmployeeDelete/:id', {
            templateUrl: '/Scripts/Views/employee/delete',
            controller: EmployeeDeleteController
       
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}


//configFunction.$inject = ['$routeProvider'];
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

AngularApp.config(configFunction);