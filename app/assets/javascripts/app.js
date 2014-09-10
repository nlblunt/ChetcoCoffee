(function()
{
    var chetcocoffee = angular.module('chetcocoffee',
    [
        'templates',
        'ngRoute',
        'ngResource',
        'appControllers',
    ]);
    
    chetcocoffee.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);
        
        $routeProvider
        .when('/',
        {
            templateUrl: "index.html",
            controller: "homeController"
        })
        .when('/admin',
        {
           templateUrl: "admin.html",
            controller: "adminController"
        });
    }]);
})();