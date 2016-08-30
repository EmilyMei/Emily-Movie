/**
 * Created by zam on 2016/8/16.
 */
(function(angular){

    var app = angular.module('movie.http-server',[]);
    app.service('MyService',['$window',function($window){

        this.jsonp=// 封装jsonp方法
            function (url,params,callback){
                // 1.拼接url及参数，及回调函数
                // console.log(url,params,callback);
                var queryString = '';
                for(var key in params){
                    queryString+= key+'='+params[key]+'&'
                }
                url = url+'?'+queryString;
                // console.log(queryString);
                var cbName = 'jsonp_'+ Math.random().toString().substr(2);//  0.3232
                //{}['aaa']
                //window.jsonp_2182192=callback;
                $window[cbName]=function(data){
                    callback(data);
                    $window.document.body.removeChild(scriptElement);
                };
                url= url +'callback='+cbName;
                // console.log(url);
                // 2.动态的创建script标签,设置src属性
                var scriptElement=$window.document.createElement('script');
                scriptElement.src=url;
                // 3.把script标签加入到页面里
                $window.document.body.appendChild(scriptElement);
            }
    }]);
})(angular)