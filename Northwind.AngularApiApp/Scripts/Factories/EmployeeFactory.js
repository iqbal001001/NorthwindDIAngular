var EmployeeFactory = function ($http, $q) {
    return {
        index: function () {
            console.log("employee factory index function");
          

          return  $http.get(
                '/api/Employee', {
                }
           
           );

           
        },

        detail: function (id) {
            console.log("employee factory detail function");


            return $http.get(
                  "/api/Employee/" + id, {
                  }

             );


        },

        edit: function (id,employee) {
            console.log("employee factory edit function");


            return $http.put(
                  "/api/Employee/" + id, employee);


        },

        create: function (employee) {
            console.log("employee factory create function");
            return $http.post(
                  "/api/Employee", employee);
        },

        deleteEmployee: function (id) {
            console.log("employee factory delete function");
            return $http.delete(
                     "/api/Employee/" + id);
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

        createQ: function (Employee) {
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

        detailQ: function (Employee) {
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