var EmployeeIndexController = function ($scope, $routeParams, $location, EmployeeFactory) {
    //var LoginController = function ($scope, $routeParams) {
    //$scope.Employee = {
    //    EmployeeID: 0,
    //    Lastname: '',
    //    Firstname: '',
    //    Title : '',
    //    TitleofCourtesy:'',
    //    Birthdate :'',
    //    HireDate : '',
    //    Address : '',
    //    City : '',
    //    Region : '',
    //    PostalCode : '',
    //    Country : '',
    //    HomePhone : '',
    //    Extension : ''

    //};

    $scope.EmployeeIndexForm ={
        returnUrl: $routeParams.returnUrl,
        IndexFailure: false
    };


        var result = EmployeeFactory.index();
    //    result.then(function (result) {
    //        if (result.success) {
    //            console.log("Employee controller index success");
    //            $scope.Employees = result;
    //            //if ($scope.EmployeeForm.returnUrl !== undefined) {
    //            //    $location.path('/routeOne');
    //            //} else {
    //            //    $location.path($scope.EmployeeForm.returnUrl);
    //            //}
    //        } else {
    //            console.log("Employee controller index failure");
    //            $scope.EmployeeIndexForm.IndexFailure = true;
    //        }
    //});

    result.success(function (data) {
            console.log("Employee controller index success");
            $scope.Employees = data;
        }).error(function () {
            console.log("Employee controller index failure");
        });


    $scope.Details = function () {
        console.log("Employee controller Details");
        var result = EmployeeFactory($scope.Employee);
        result.then(function (result) {
            if (result.success) {
                console.log("Employee controller Create success");
                if ($scope.EmployeeForm.returnUrl !== undefined) {
                    $location.path('/routeOne');
                } else {
                    $location.path($scope.EmployeeForm.returnUrl);
                }
            } else {
                console.log("Employee controller Create failure");
                $scope.loginForm.CreateFailure = true;
            }
        });
    }

    $scope.delete = function () {
        console.log("Employee controller delete");
    }
}

EmployeeIndexController.$inject = ['$scope', '$routeParams', '$location', 'EmployeeFactory'];
//LoginController.$inject = ['$scope', '$routeParams'];