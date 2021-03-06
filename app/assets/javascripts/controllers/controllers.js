var appControllers = angular.module('appControllers', ['appServices']);

appControllers.controller('homeController', ['$scope', 'productFactory', function($scope, productFactory)
{
    // Holder for navbar
    this.nav = 'index';

    $scope.products = productFactory.getProducts();

    this.navIsSelected = function(selected)
    {
        return this.nav === selected;
    };

    this.navSetSelected = function(selected)
    {
        this.nav = selected;
    }; 
}]);

appControllers.controller('adminController', ['$scope', 'adminFactory', 'productFactory', '$http', function($scope, adminFactory, productFactory, $http)
{
    var image = "";
    //this.message;
    this.nav = 'overview';
    $scope.addProductSelected = false;
    $scope.editProductSelected = false;

    adminFactory.adminCheck().$promise
    .then(function(result)
        {
            //session = result;
            $scope.session = result;
        });
    
    $scope.products = productFactory.getProducts();

    $scope.onFileSelect = function($files)
    {
        image = $files[0];
    };

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
            $scope.message = reason; //"Invalid username or password";
        });
    };
    
    this.adminLogout = function()
    {
        adminFactory.adminLogout(session.id);

        //session = {"id": 0};
        $scope.session = session;
    };

    this.addProduct = function(product)
    {
        productFactory.addProduct(product, image)
        .then(function()
            {
                $scope.products = productFactory.getProducts();
                $scope.addProductSelected = false;
            });
    };

    this.removeProduct = function(prodID)
    {
        productFactory.removeProduct(prodID)
        .then(function()
        {
            $scope.products = productFactory.getProducts();
        });
    };

    $scope.editProduct = function(prodID)
    {
        productFactory.getProduct(prodID)
        .then(
            function(data)
            {
                $scope.edit = data;
                $scope.editProductSelected = true;
            });
    };

    $scope.saveEditProduct = function(edit)
    {
        productFactory.editProduct(edit)
        .then(
            function()
            {
                $scope.products = productFactory.getProducts();
                $scope.editProductSelected = false;
            });
    };

    $scope.hideEdit = function()
    {
        $scope.editProductSelected = false;
    };

    this.navIsSelected = function(selected)
    {
        return this.nav === selected;
    };

    this.navSetSelected = function(selected)
    {
        this.nav = selected;
    };
    
}]);