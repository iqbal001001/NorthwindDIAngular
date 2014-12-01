var EmployeeDetailController = function ($scope, $routeParams, $location, EmployeeFactory) {
    //var LoginController = function ($scope, $routeParams) {
    $scope.employee = {
        EmployeeID: 0,
        Lastname: '',
        Firstname: '',
        Title : '',
        TitleofCourtesy:'',
        Birthdate :'',
        HireDate : '',
        Address : '',
        City : '',
        Region : '',
        PostalCode : '',
        Country : '',
        HomePhone : '',
        Extension : ''

    };

    $scope.EmployeeIndexForm = {
        returnUrl: $routeParams.returnUrl,
        IndexFailure: false
    };


    var result = EmployeeFactory.detail($routeParams.id);
   

    result.success(function (data) {
        console.log("Employee controller index success");
        $scope.employee = data;
    }).error(function () {
        console.log("Employee controller index failure");
    });


    

}

EmployeeDetailController.$inject = ['$scope', '$routeParams', '$location', 'EmployeeFactory'];
//LoginController.$inject = ['$scope', '$routeParams'];