var app = angular.module('madLibRoute', ['ngRoute']);

	app.config(function($routeProvider){
	  $routeProvider.when('/', {
	    templateUrl: 'view1.html',
	    controller: 'inputController'
	  });

	  $routeProvider.when('/view2', {
	    templateUrl: 'view2.html',
	    controller: 'showLibs'
	  });

	  $routeProvider.when('/view3',{
	  	templateUrl: 'view3.html',
	  	controller: 'display'
	  });
	});