var myApp = angular.module('myApp');

  myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('Books Controller loaded')

   function init(callback){
     $scope.callback();   
    } 

    $scope.getBooks = function(){
		$http.get('/api/books').then(function(response){
			$scope.books = response.data;
    });
    init(getBooks);
    }

    


    /*
    $scope.getBook = function(){
      var id = $routeParams.id;
		$http.get('/api/books/'+id).then(function(response){
			$scope.book = response.data;
    });
        init(getBook);
    } */

}]);  

