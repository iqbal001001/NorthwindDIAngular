var EmployeeCreateController = function ($scope, $routeParams, $location, EmployeeFactory) {
    //var LoginController = function ($scope, $routeParams) {
    $scope.Employee = {
      
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

    $scope.EmployeeCreateForm = {
        returnUrl: $routeParams.returnUrl,
        CreateFailure: false
    };





    $scope.Create = function () {
        var result = EmployeeFactory.create($scope.Employee);


        result.success(function (data) {
            console.log("Employee controller create success");
            $scope.Employee = data;
            //if ($scope.EmployeeCreateForm.returnUrl !== undefined) {
                $location.path('/EmployeeIndex');
           // } else {
            //    $location.path($scope.EmployeeForm.returnUrl);
            //}
        }).error(function () {
            console.log("Employee controller create failure");
        });
    }



}

EmployeeCreateController.$inject = ['$scope', '$routeParams', '$location', 'EmployeeFactory'];
//LoginController.$inject = ['$scope', '$routeParams'];