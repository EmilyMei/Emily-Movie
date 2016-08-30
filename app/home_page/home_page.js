/**
 * Created by zam on 2016/8/17.
 */
(function(angular){
    'use strict';
    var app = angular.module('movie.home_page',[
        'ngRoute',
        'movie.http-server'
    ]);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{
            templateUrl:'./home_page/view.html',
            controller:'homeController'
        });
    }]);
    app.controller('homeController',[
        '$scope',
        'MyService'
        ,function($scope,MyService){
            var url = 'http://api.douban.com/v2/movie/in_theaters';
            MyService.jsonp(url,{},function(data){
                $scope.data = data.subjects;
                $scope.$apply();
            });
    }]);
})(angular);