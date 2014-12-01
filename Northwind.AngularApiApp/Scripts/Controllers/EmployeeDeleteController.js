var EmployeeDeleteController = function ($scope, $routeParams, $location, EmployeeFactory) {
   

    $scope.EmployeeDeleteForm = {
        returnUrl: $routeParams.returnUrl,
        editFailure: false
    };


    var result = EmployeeFactory.detail($routeParams.id);
    result.success(function (data) {
        console.log("Employee controller edit get success");
        $scope.employee = data;
    }).error(function () {
        console.log("Employee controller edit get failure");
    });


    $scope.Delete = function () {
        var result = EmployeeFactory.deleteEmployee($scope.employee.EmployeeID);
        result.success(function (data) {
            console.log("Employee controller create success");
            $location.path('/EmployeeIndex');
           // $scope.employee = data;
        }).error(function () {
            console.log("Employee controller create failure");
        });
    }



}

EmployeeDeleteController.$inject = ['$scope', '$routeParams', '$location', 'EmployeeFactory'];
//LoginController.$inject = ['$scope', '$routeParams'];