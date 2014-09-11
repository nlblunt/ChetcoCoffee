var appControllers = angular.module('appControllers', ['appServices']);

appControllers.controller('homeController', ['$scope', function($scope)
{
        
}]);

appControllers.controller('adminController', ['$scope', 'adminFactory', '$http', function($scope, adminFactory, $http)
{
    var session = "";

    session = adminFactory.adminCheck();
    //session = "asas";
    $scope.session = session;
    //alert(test);
    //$scope.session = s.admin;
    //$scope.session = "Another";
    //adminFactory.adminLogout();
    //adminFactory.adminLogin();
    
    this.adminLogin = function()
    {
        adminFactory.adminLogin();
        $scope.session = adminFactory.adminCheck();
    };
    
    this.adminLogout = function()
    {
        adminFactory.adminLogout(session.id);
        session = "";
        //session = adminFactory.adminCheck();
        alert(session);
        $scope.session = session;
    };
}]);