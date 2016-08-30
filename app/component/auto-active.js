/**
 * Created by zam on 2016/8/23.
 */
(function(angular){
    'use strict';
    var app = angular.module('movie.auto-active',[]);

    app.directive('autoActive',['$location',function($location){
        return{
            link: function(scope, element, attributes){
                scope.loca = $location;
                scope.$watch('loca.url()',function(newValue,oldValue){
                    var aLink = element.children().attr('href').substr(1);
                    // console.log(aLink + "+++++");
                    // var hash = element.children()[0].href.split('#')[1];
                    // console.log(hash);
                    if(newValue.startsWith(aLink)){
                        element.parent().children().removeClass(attributes.autoActive);
                        element.addClass(attributes.autoActive);
                    }
                })
            }
        };
    }]);
})(angular);