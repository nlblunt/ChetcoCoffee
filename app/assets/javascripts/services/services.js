var appServices = angular.module('appServices', ['ngResource', 'angularFileUpload']);


//Factory for admin actions.
appServices.factory('adminFactory', ['$resource','$http', function($resource, $http)
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
    
    factory.adminCheck = function()
    {
        return adminSession.admin_check();
        
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
    };
    
    factory.adminLogin = function(data)
    {
      //adminSession.$save({id: 1, name: "test"});
      data = "email"[{email: "nico@gmail.com"}];
      var admin = new adminSession({username: "nico@gmail.com", password: "password"});
      admin.$save();
    };
    
    factory.adminLogout = function(cSession)
    {
        var session = $resource('/admins/sign_out');
        session.delete({id: cSession});
    };
    
    //Default return of factory
    return factory;
}]);