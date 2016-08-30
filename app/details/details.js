/**
 * Created by zam on 2016/8/19.
 */
(function(angular){
    'use strict';
    var app = angular.module('movie.details',[
        'ngRoute',
        'movie.http-server'
    ]);


    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/details/:id',{
            templateUrl: "./details/view.html",
            controller:'detailsController'
        });
    }]);

    app.controller('detailsController',[
        '$scope',
        '$routeParams',
        'MyService',
        function($scope,$routeParams,MyService){
            $scope.loading = true;
            MyService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data){
                $scope.movie=data;
                $scope.loading = false;
                $scope.$apply();
            })
        }
    ]);
})(angular);