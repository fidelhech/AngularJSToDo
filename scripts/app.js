angular.module('todoListApp', [])
.controller('mainCtrl', function($scope, dataService) {

	$scope.helloWorld = function() {
		console.log('Hello There! HelloWorld Controller in the MainCtrl.');
	};

	$scope.helloConsole = dataService.helloConsole;

	$scope.learningChange = function() {
		console.log('Hello Learning Change().');
	};

	dataService.getTodos( function(response) {
		$scope.todos = response.data;
	});

	$scope.deleteTodo = function(todo, index){
		dataService.deleteTodo(todo);
		$scope.todos.splice(index, 1);
	};

	$scope.saveTodo = function(todo){
		dataService.saveTodo(todo);
	}

})
.service('dataService', function($http) {

	this.helloConsole = function() {
		console.log('Hello from Service.');
	};

	this.getTodos = function(cb) {
		$http.get('mock/todos.json')
		.then(cb);
	}

	this.deleteTodo = function(todo) {
		console.log("The "+todo.name+" has been deleted.");
		//other logic
	}

	this.saveTodo = function(todo) {
		console.log("The "+todo.name+" has been saved.");
		//other logic
	}

});
