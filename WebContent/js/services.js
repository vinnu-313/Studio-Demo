'use strict';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('studio.services', [])
        .factory('DatasourceService', ['$http', function ($http) {
            return {
              get : function(index, count, success){
//                  console.info("Index : "+index);
//                  console.info("Count : "+count);
                  $http({
                      url : 'http://gbs.glassbeam.com:9000/readFile/'+index+'/'+ (index+count),
                      method : 'GET'
                  }).then(function(response){
                      console.info(response.data);
                     success(response.data.lines); 
                  }, function(response){
                      console.error("Failed to fetch lines");
                  });
              }  
            };
        }]);
