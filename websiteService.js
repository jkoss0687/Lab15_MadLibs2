var app = angular.module('madLibRoute');
 	app.factory('reddit', ["$http", function($http){
		return	$http.get('http://www.reddit.com/r/aww/.json');
	}]);