angular.module("MKSTream",["ui.router","clientRoutes","feat"]),angular.module("clientRoutes",[]).config(["$stateProvider","$urlRouterProvider","$httpProvider",function($stateProvider,$urlRouterProvider,$httpProvider){$stateProvider.state("test",{url:"/test",templateUrl:"./app/components/feat_sample/feat.html"})}]),angular.module("feat",[]).controller("featController",function($scope,$state){$scope.clicker=function(){console.log("im executing"),$state.go("test")}});