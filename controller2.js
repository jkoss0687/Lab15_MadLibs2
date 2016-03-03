var app = angular.module('madLibRoute');

	app.controller("showLibs", function($scope, wordsService){
	  $scope.adjective = wordsService.getAdj();
	  $scope.progLang = wordsService. getProgLang();
	  $scope.number1 = wordsService.getNumber1();
	  $scope.number2 = wordsService.getNumber2();
	  $scope.anotherLang = wordsService.getAnotherLang();

	});