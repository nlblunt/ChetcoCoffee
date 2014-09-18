var appControllers = angular.module('appControllers', ['appServices']);

appControllers.controller('homeController', ['$scope', function($scope)
{
        
}]);

appControllers.controller('adminController', ['$scope', 'adminFactory', '$http', function($scope, adminFactory, $http)
{
    this.session;
    this.message;

    adminFactory.adminCheck().$promise
    .then(function(result)
        {
            //alert(result.id);
            session = result;
            $scope.session = result;
        });
    
    this.adminLogin = function(login)
    {
        adminFactory.adminLogin(login)
        .then(function(adminSession)
        {
            session = adminSession;
            $scope.session = adminSession;
            $scope.message = "";
        },
        function(reason)
        {
            $scope.message = "Invalid username or password";
        });
    };
    
    this.adminLogout = function()
    {
        adminFactory.adminLogout(session.id)

        session = {"id": 0};
        $scope.session = session;
    };
}]);