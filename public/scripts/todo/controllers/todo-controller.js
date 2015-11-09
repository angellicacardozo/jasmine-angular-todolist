(function() {
	'use strict';

	angular.module('todo')
		.controller('TodoController', TodoController)
		.config(function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'views/todo/main.html',
				controller: 'TodoController',
				controllerAs: 'taskVm'
			});
		});	

	function TodoController($scope) {
		var vm= this;

		vm.list= ['Hello', 'Ola', 'Ça va'];
		vm.add= add;
		vm.model= '';

		function add(itemName) {
			vm.list.push(itemName);
		}
	};

})();