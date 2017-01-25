angular.module('todoListApp', [])
.controller('mainCtrl', function($scope) {

	$scope.helloWorld = function() {
		console.log('Hello There! HelloWorld Controller in the MainCtrl.');
	};

	$scope.todos = [
		{'name': 'First Todo'},
		{'name': 'Second Todo'},
		{'name': 'Third Todo'},
		{'name': 'Fourth Todo'},
		{'name': 'Fifth Todo'},
	]

	$scope.learningChange = function() {
		console.log('Hello Learning Change().');
	};

});
