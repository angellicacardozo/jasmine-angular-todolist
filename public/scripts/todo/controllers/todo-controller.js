(function() {
	'use strict';

	angular.module('todo')
		.controller('TodoController', TodoController)
		.config(function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'views/todo/main.html',
				controller: 'TodoController',
				controllerAs: 'bellhop'
			});
		});	

	function TodoController($scope) {
		var me= this;

		me.list= [];
		me.add= add;

		function add(itemName) {
			me.list.push(itemName);
		}
	};

})();