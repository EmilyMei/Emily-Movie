(function (angular) {
    "use strict";

    var app = angular.module('movie',[
        'ngRoute',
        'movie.home_page',
        'movie.details',
        'movie.list',
        'movie.auto-active'
    ]);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.otherwise({
            redirectTo:'home_page'
        });
    }]);
    app.controller('mainController',['$scope','$location',function($scope,$location){
        $scope.query = '';
        $scope.search = function(){
            $location.url('/search?q=' + $scope.query);
        }
    }]);

})(angular);