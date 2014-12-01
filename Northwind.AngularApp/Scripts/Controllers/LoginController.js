var LoginController = function ($scope, $routeParams, $location, LoginFactory) {
//var LoginController = function ($scope, $routeParams) {
    $scope.loginForm = {
        emailAddress: '',
        password: '',
        rememberMe: false,
        returnUrl: $routeParams.returnUrl,
        loginFailure: false
    };

    $scope.login = function () {
        console.log("login controller login");
        var result = LoginFactory($scope.loginForm.emailAddress, $scope.loginForm.password, $scope.loginForm.rememberMe);
        result.then(function (result) {
            if (result.success) {
                console.log("login controller login success");
                if ($scope.loginForm.returnUrl !== undefined) {
                    $location.path('/routeOne');
                } else {
                    $location.path($scope.loginForm.returnUrl);
                }
            } else {
                console.log("login controller login failure");
                $scope.loginForm.loginFailure = true;
            }
        });
    }
}

LoginController.$inject = ['$scope', '$routeParams', '$location', 'LoginFactory'];
//LoginController.$inject = ['$scope', '$routeParams'];