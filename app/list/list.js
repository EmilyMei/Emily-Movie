/**
 * Created by zam on 2016/8/18.
 */
(function(angular){
    'use strict';
    var app = angular.module('movie.list',[
        'ngRoute',
        'movie.http-server'
    ]);

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/:movieType/:page?',{
            templateUrl:'./list/view.html',
            controller:'listController'
        });

    }]);

    app.controller('listController',[
        '$scope',
        '$routeParams',
        '$route',
        'MyService',
        function($scope,$routeParams,$route,MyService){
            $scope.loading = true;
            /*当前页*/
            $scope.page = ($routeParams.page - 0) || '1';
            /*每页显示的数量*/
            $scope.count = 12;
            /*数据的总数*/
            $scope.total = 0;
            /*总页数*/
            $scope.totalPage = 0;

            var url = 'http://api.douban.com/v2/movie/'+$routeParams.movieType;
            MyService.jsonp(url,{
                start:($scope.page - 1) * $scope.count,
                count:$scope.count,
                q:$routeParams.q
            },function(data){
                $scope.data = data;
                // console.log($scope.data);
                $scope.loading = false;
                $scope.total = $scope.data.total;
                $scope.totalPage = Math.ceil($scope.total / $scope.count);
                $scope.$apply();
            });

            $scope.goPage = function(newPage){
                if(newPage <=0 || newPage > $scope.totalPage){
                    return;
                }
                $scope.page = newPage;
                $route.updateParams({page:$scope.page});
            };
        }
    ]);
})(angular);