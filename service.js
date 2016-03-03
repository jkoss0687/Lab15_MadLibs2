var app = angular.module('madLibRoute');

  app.factory('wordsService', function(){
    var userAdj = "";
    var userNumber1 = "";
    var userProgLang = "";
    var userAnotherLang = "";
    var userNumber2 = "";

    return {
      saveAdj: function (adjective){
        userAdj = adjective;
      },
      getAdj : function(){
        return userAdj;
      },
      saveNumber1: function(number1){
      	userNumber1 = number1;
      },
      getNumber1: function(){
      	return userNumber1;
      }, 

      saveProgLang: function(progLang){
        userProgLang = progLang;
      },
      getProgLang: function(){
        return userProgLang;
      },

      saveNumber2: function(number2){
        userNumber2 = number2;
      },
      getNumber2: function(){
        return userNumber2;
      }, 

      saveAnotherLang: function(anotherLang){
        userAnotherLang = anotherLang;
      },
      getAnotherLang: function(){
        return userAnotherLang;
      }

    };

  });