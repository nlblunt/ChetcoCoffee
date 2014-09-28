var app = angular.module('adminDirectives',[]);

app.directive('adminLogin', function()
{
	return{
		restrict: 'E',
		templateUrl: 'admin_templates/admin_login.html'
	};
});

app.directive('adminLogout', function()
{
	return{
		restrict: 'E',
		templateUrl: 'admin_templates/admin_logout.html'
	};
});

app.directive('adminDashboard', function()
{
	return{
		restrict: 'E',
		templateUrl: 'admin_templates/admin_dashboard.html'
	};
});

app.directive('adminNavbar', function()
{
	return{
		restrict: 'E',
		templateUrl: 'admin_templates/admin_navbar.html'
	};
});

app.directive('adminContent', function()
{
	return{
		restrict: 'E',
		templateUrl: 'admin_templates/admin_content.html'
	};
});

app.directive('adminProducts', function()
{
	return{
		restrict: 'E',
		templateUrl: 'admin_templates/admin_products.html'
	};
});

app.directive('adminOverview', function()
{
	return{
		restrict: 'E',
		templateUrl: 'admin_templates/admin_overview.html'
	};
});

app.directive('adminOrders', function()
{
	return{
		restrict: 'E',
		templateUrl: 'admin_templates/admin_orders.html'
	};
});

app.directive('adminCustomers', function()
{
	return{
		restrict: 'E',
		templateUrl: 'admin_templates/admin_customers.html'
	};
});