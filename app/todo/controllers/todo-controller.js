(function() {
	'use strict';

	angular.module('todo')
		.controller('TodoController', TodoController);	

	function TodoController($scope) {
		$scope.list = [];
		$scope.add = function(itemName) {
			$scope.list.push(itemName);
		};
	};

})();