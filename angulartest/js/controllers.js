/* 
* @Author: [LDF] <47121862@qq.com>
* @Date:   2015-11-24 17:12:51
* @Last Modified by:   [谈际波] <1533954229@qq.com>
* @Last Modified time: 2015-12-09 14:51:06
*/

'use strict';
var APP=angular.module('tanCtrl',[]);

APP.controller('subCtrl',['$scope','loginSer',function($scope,loginSer){
	$scope.formData={
		userName:'tanjibo',
		pwd:''
	}
	$scope.sub=function(){
     var promise=loginSer.query('aa.php',$scope.formData,'POST');
     promise.then(
     	function(data){
        alert(data);
     },function(data){
        alert(data);
     })
	}
	
}])