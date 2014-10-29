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
        self.adminLogin = function(login)
        {
            //Setup a deferred promise
            var deferred = $q.defer();

            //Create a new adminSession object.  Save to backend for authorization.
            var admin = new adminSession({email: login.email, password: login.password});
            
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

appServices.factory('productFactory', ['$resource', '$http', '$q', '$upload', function($resource, $http, $q, $upload)
{
    var self = {};

    var product = $resource('/products/:id', {format: 'json'},
        {
            'update': {method: 'PATCH'}
        });

    self.getProducts = function()
    {
        return product.query();
    };

    self.getProduct = function(prodID)
    {
        var deferred = $q.defer();

        product.get({id: prodID})
        .$promise.then(
            function(data)
            {
                deferred.resolve(data);
            },
            function()
            {
                deferred.reject("Error");
            });
        return deferred.promise;
    };
    
    self.addProduct = function (prod, file)
    {
        //Setup deferred promise
        var deferred = $q.defer();

        //Create a new product object.  Save to backend.
        var newProduct = new product(prod);


        if(file !== "")
        {
            $upload.upload({
                url: '/products',
                headers: {'Content-Type':'multipart/form-data'},
                data: {product: prod},
                file: file,
                fileName: 'image.jpg',
                fileFormDataName: "image[image]"
            })
            .then(
            function()
            {
                deferred.resolve();
            },
            function()
            {
                deferred.reject("Error");
            });
        }
        else
        {
            $upload.upload({
                url: '/products',
                headers: {'Content-Type':'multipart/form-data'},
                data: {product: prod}
            })
            .then(
            function()
            {
                deferred.resolve();
            },
            function()
            {
                deferred.reject("Error");
            });
        }

        return deferred.promise;

        //newProduct.$save()
        //.then(
        //    function()
        //    {
        //        deferred.resolve();
         //   },
         //   function()
        //    {
        //        deferred.reject("Error");
        //    });
        //return deferred.promise;
    };

    self.removeProduct = function(prodID)
    {
        var deferred = $q.defer();

        //Delete product using prodID.
        product.delete({id: prodID})
        .$promise.then(
            function()
            {
                deferred.resolve();
            },
            function()
            {
                deferred.reject("Error removing product");
            });
        return deferred.promise;
    };

    self.editProduct = function(edit)
    {
        var deferred = $q.defer();

        product.update({id: edit.id}, edit)
        .$promise.then(
            function()
            {
                deferred.resolve();
            },
            function()
            {
                deferred.reject("Error");
            });
        return deferred.promise;
    };

    return self;
}])