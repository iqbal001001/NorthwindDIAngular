var EmployeeFactory = function ($http, $q) {
    return {
        index: function () {
            console.log("employee factory index function");
          

          return  $http.get(
                '/Employee/GetEmployee', {
                }
           
           );

           
        },

        indexQ: function () {
            console.log("employee factory index function");
            var deferredObject = $q.defer();

            $http.post(
                '/Employee/Index', {
                }
            ).
            success(function (data) {
                if (data == "True") {
                    deferredObject.resolve({ success: true });
                } else {
                    deferredObject.resolve({ success: false });
                }
            }).
            error(function () {
                deferredObject.resolve({ success: false });
            });

            return deferredObject.promise;
        },

        create: function (Employee) {
            console.log("employee factory function");
            var deferredObject = $q.defer();

            $http.post(
                '/Employee/Details', {
                    //employee: Employee,
                    //file : null
                    //Email: emailAddress,
                    //Password: password,
                    //RememberMe: rememberMe
                }
            ).
            success(function (data) {
                if (data == "True") {
                    deferredObject.resolve({ success: true });
                } else {
                    deferredObject.resolve({ success: false });
                }
            }).
            error(function () {
                deferredObject.resolve({ success: false });
            });

            return deferredObject.promise;
        },

        detail: function (Employee) {
        console.log("employee factory function");
        var deferredObject = $q.defer();

        $http.post(
            '/Employee/Details', {
                //employee: Employee,
                //file : null
                //Email: emailAddress,
                //Password: password,
                //RememberMe: rememberMe
            }
        ).
        success(function (data) {
            if (data == "True") {
                deferredObject.resolve({ success: true });
            } else {
                deferredObject.resolve({ success: false });
            }
        }).
        error(function () {
            deferredObject.resolve({ success: false });
        });

        return deferredObject.promise;
    }
        // console.log("login factory");
    }
}

EmployeeFactory.$inject = ['$http', '$q'];