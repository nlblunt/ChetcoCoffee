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

/************************************************************/
app.directive('homeIndex', function()
{
	return{
		restrict: 'E',
		templateUrl: 'home_templates/home_index.html'
	};
});

app.directive('homeMenu', function()
{
	return{
		restrict: 'E',
		templateUrl: 'home_templates/home_menu.html'
	};
});

app.directive('homeNavbar', function()
{
	return{
		restrict: 'E',
		templateUrl: 'home_templates/home_navbar.html'
	};
});

app.directive('homeFeatured', function()
{
	return{
		restrict: 'E',
		templateUrl: 'home_templates/home_featured.html'
	};
});

app.directive('homeConnect', function()
{
	return{
		restrict: 'E',
		templateUrl: 'home_templates/home_connect.html'
	};
});

app.directive('homeBlog', function()
{
	return{
		restrict: 'E',
		templateUrl: 'home_templates/home_blog.html'
	};
});