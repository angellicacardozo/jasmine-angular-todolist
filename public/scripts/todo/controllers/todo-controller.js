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
		vm.removeSelection=[];
		vm.model= '';

		vm.add= add;
		vm.remove= remove;
		vm.toggleRemove= toggleRemove;

		function add(itemName) {
			vm.list.push(itemName);
		}

		function remove(collection) {
			var newlist= [];
			var hasFound= false;

			for(var i= 0; i < vm.list.length; i++) {
				for(var j= 0; j < collection.length; j++) {
					hasFound= (vm.list[i] === collection[j]);
					if(hasFound) {
						break;
					}
				}

				if(!hasFound) {
					newlist.push(vm.list[i]);
					hasFound= false;
				}
			}

			vm.list= newlist;
		}

		function toggleRemove(item) {
			var indexOf = vm.removeSelection.indexOf(item);

			if(indexOf===-1) {
				vm.removeSelection.push(item);
			} else {
				vm.removeSelection.splice(indexOf, 1);
			}
			
		}
	};

})();