// ['$http', '$resource', '$q', function ($http, $resource, $q) {

var EmployeeService = function ($http, $resource, $q) {
    var resource = $resource('/api/employee/:id', { id: '@id' });
    return {
        query: function () {
            var deferred = $q.defer();
            resource.query(
                function (response) { deferred.resolve(response); },
                function (response) { deferred.reject(response); }
            );
            return deferred.promise;
        },
        save: function (rsvp) {
            var deferred = $q.defer();
            resource.save(rsvp,
                function (response) { deferred.resolve(response); },
                function (response) { deferred.reject(response); }
            );
            return deferred.promise;
        }
    }
}
//}]);

EmployeeService.$inject = ['$http', '$resource', '$q'];


