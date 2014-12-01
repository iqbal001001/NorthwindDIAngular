var LoginFactory = function ($http, $q) {
    return function (emailAddress, password, rememberMe) {
        console.log("login factory function");
        var deferredObject = $q.defer();

        $http.post(
            '/Account/Login', {
                Email: emailAddress,
                Password: password,
                RememberMe: rememberMe
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

LoginFactory.$inject = ['$http', '$q'];