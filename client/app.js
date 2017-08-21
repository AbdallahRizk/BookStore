var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller: 'BooksController',
        templateUrl: 'views/books.html'
    })
    .when('/books',{
        controller: 'BooksController',
        templateUrl: 'views/books.hrml'
    })
    .when('/books/details/:id',{
        controller: 'BooksController',
        templateUrl: 'views/book_details.html'
    })
    .when('/books/add', {
        controller: 'BooksController',
        templateUrl: 'views/add_book.html'
    })
    .when('/books/edit/:id', {
        controller: 'BooksController',
        templateUrl: 'views/edit_book.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});


// This configration is just to disabl ethe hashPrefix ! by deleteing this configration u need to add ! after all # in the templateUrl
myApp.config(['$locationProvider', 
function($locationProvider) {
   $locationProvider.hashPrefix('');
}
]);