var EmployeeEditController = function ($scope, $routeParams, $location, EmployeeFactory) {
    //var LoginController = function ($scope, $routeParams) {
    $scope.employee = {
        EmployeeID: 0,
        Lastname: '',
        Firstname: '',
        Title: '',
        TitleofCourtesy: '',
        Birthdate: '',
        HireDate: '',
        Address: '',
        City: '',
        Region: '',
        PostalCode: '',
        Country: '',
        HomePhone: '',
        Extension: ''

    };

    $scope.EmployeeEditForm = {
        returnUrl: $routeParams.returnUrl,
        editFailure: false
    };


    var result = EmployeeFactory.detail($routeParams.id);


    result.success(function (data) {
        console.log("Employee controller edit get success");
        $scope.Employee = data;
    }).error(function () {
        console.log("Employee controller edit get failure");
    });


    $scope.Edit = function () {
        var result = EmployeeFactory.edit($scope.Employee.EmployeeID, $scope.Employee);


        result.success(function (data) {
            console.log("Employee controller edit success");
            $scope.employee = data;
            $location.path('/EmployeeIndex');
        }).error(function () {
            console.log("Employee controller edit failure");
        });
    }



}

EmployeeEditController.$inject = ['$scope', '$routeParams', '$location', 'EmployeeFactory'];
//LoginController.$inject = ['$scope', '$routeParams'];