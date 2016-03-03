var app = angular.module('madLibRoute');
	app.controller('inputController', ["$scope", "wordsService", function($scope, wordsService){
	  $scope.save = function(){
	    wordsService.saveAdj($scope.adjective);
	    wordsService.saveProgLang($scope.progLang);
	    wordsService.saveNumber1($scope.number1);  
	    wordsService.saveNumber2($scope.number2);
	    wordsService.saveAnotherLang($scope.anotherLang);
	  };
	}]);