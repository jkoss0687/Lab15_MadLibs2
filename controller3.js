var app = angular.module('madLibRoute');
	app.controller('display', ['reddit', function(reddit){
		var display = this;

		reddit.then(function success(response){
			display.posts = response.data.data.children;
		});
	}]);
