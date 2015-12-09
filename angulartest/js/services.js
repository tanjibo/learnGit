/* 
 * @Author: [谈际波] <1533954229@qq.com>
 * @Date:   2015-11-24 17:13:30
 * @Last Modified by:   [谈际波] <1533954229@qq.com>
 * @Last Modified time: 2015-12-09 14:52:06
 */

'use strict';

angular.module('tanService', []).



factory('loginSer', ['$http', '$q', function($http, $q) {
        return {
            query: function(url,data,method) {
            	 //声明延后执行,表示要去监控后面的执行
                var deferred = $q.defer(),
                    method=method || 'GET'; 
              
                $http({
                        method: method,
                        url: url,
                        data: data
                    }).success(function(data, status, headers, config) {
                    	// 申明执行成功,即http请求数据成功,可以返回数据了
                        deferred.resolve(data); 
                    }).error(function(data, status, headers, config) {
                        //申明执行失败,即服务器返回错误
                        deferred.reject(data);
                    })
                    // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
                   return deferred.promise;
            }
            
           
        }
    }])
    // var ser=angular.module('tanService',[]);

// ser.service('indexSer',function(){

// 	this.getLoginData=function(url,data){
// 		$http.post(url,data).success(function(data){

// 		}) 
// 	}



// })
