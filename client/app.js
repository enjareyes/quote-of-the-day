angular.module('app',[])

.controller('quote', function($scope, quoteFac){
  $scope.quote;
  $scope.auth;

  $scope.getquote = function(){
    quoteFac.getQuote().success(function(data){
      $scope.quote=data.quote
      $scope.auth=data.auth
    })
  }

  $scope.getquote();
})

.factory('quoteFac', function($http){

  var getQuote = function(){
    return $http.get('/quoteofday')
    .success(function(data, status, headers, config){
      console.log(data)
      return data
    })
  }

  return { getQuote: getQuote }

})