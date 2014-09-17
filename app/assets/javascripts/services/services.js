var appServices = angular.module('appServices', ['ngResource', 'angularFileUpload']);

appServices.factory('adminFactory', ['$resource', '$http', '$q', function($resource, $http, $q)
{
        var self = {};
        
        //Resource location for adminSession.
        var adminSession = $resource('/admins/sign_in', {format: 'json'},
        {
            //Customer API to check admin session.
            admin_check: {method:'GET', url:'/admins/admin_check'}
        });

        //Simple admin session check.  Returns session ID.  If ID = 0, then not logged in.
        self.adminCheck = function()
        {
            return adminSession.admin_check();
        };

        //Logs an admin in and returns the session id
        self.adminLogin = function(data)
        {
            //Setup a deferred promise
            var deferred = $q.defer();

            //Create a new adminSession object.  Save to backend for authorization.
            var admin = new adminSession({email: "nico@gmail.com", password: "password"});
            
            //Attempt to save the new session.  If success, return session id.
            admin.$save()
            .then(
            function()
            {
                deferred.resolve(adminSession.admin_check());
            },
            function()
            {
                deferred.reject("Error");
            });

            //Return the promise to resolve later.
            return deferred.promise;
        };

        //Logs out the admin.
        self.adminLogout = function(cSession)
            {
                var admin = $resource('/admins/sign_out');

                //Delete the admin session.
                admin.delete({id: cSession});
            };

    return self;
}]);



//Factory for admin actions.
appServices.factory('adminFactoryold', ['$resource','$http','$q', function($resource, $http, $q)
{
    //Empty factory for adminFactory.
    var factory = {};
    var currentSession = [];
    var response = {};
    
    //For $resource function
    var adminSession = $resource('/admins/sign_in', {format: 'json'},
    {
        admin_check: {method:'GET', url:'/admins/admin_check'}
    });
    var adminRegistration
    
    //factory.adminCheck = function()
    //{
    //    var deferred = $q.defer();
    //    adminSession.admin_check({
    //        function(response)
    //        {
    //            deferred.resolve(response);
    //        },
    //        function(response)
    //        {
    //            deferred.reject(response);
    //        });

    //    return deferred.promise;
    //    });
        
        //$http({url: '/admins/admin_check.json',
        //        method: 'GET',
        //    format: 'JSON',
        //})
        //.then(function(result)
    //    {
      //      return result;
        //});
        //.success(function(result)
        //{
        //    alert("Succes");
        //    response.admin = result;
        //})
        //.error(function(data, status)
    //    {
     //       alert("Error");
       //});
        
        //return response;
    //};
    
    factory.adminLogin = function(data)
    {
      //adminSession.$save({id: 1, name: "test"});
      var session = {};
      var admin = new adminSession({email: "nico@gmail.com", password: "password"});
      admin.$save();
    
      //return adminSession.admin_check();
      var promise = adminSession.admin_check();
      promise.then(
        function(response)
        {
            return response;
        });
    };
    
    factory.adminLogout = function(cSession)
    {
        var admin = $resource('/admins/sign_out');
        admin.delete({id: cSession});
    };
    
    //Default return of factory
    return factory;
}]);