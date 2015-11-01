(function() {
	'use strict';

	angular.module('todo')
		.controller('TodoController', TodoController);	

	function TodoController($scope) {
		var me= this;

		me.list= [];
		me.add= add;

		function add(itemName) {
			me.list.push(itemName);
		}
	};

})();