// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html
var app = angular.module('shortUrlApp',[]);

app.controller ('shortAppCtrl',($scope) => {
$scope.urlToShorten = "Hello world";
})
