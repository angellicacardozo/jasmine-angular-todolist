// describe : This defines the main feature we are testing
describe('todoController', function() {
	// scope - it holds controller's scope
	var scope= {}; 
	var vm= {};
	// This is the assemble step
	beforeEach(function() {
		module('todo');

		inject(function($controller) {
			vm= $controller('TodoController', {
				$scope: scope
			});
		});

	});
	// This is the act and assert step
	it('should define a list object', function() {
		expect(vm.list).toBeDefined();
	});

	describe('when using a to-do list', function() {

		beforeEach(function() {
			vm.add('repeat');
		});
		it('should add item to last item in list', function() {
			var lastIndexOfList = vm.list.length - 1;
			expect(vm.list[lastIndexOfList]).toEqual('repeat');
		})
	});
});