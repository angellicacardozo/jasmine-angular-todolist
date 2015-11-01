// describe : This defines the main feature we are testing
describe('todoController', function() {
	// scope - it holds controller's scope
	var scope= {}; 
	// This is the assemble step
	beforeEach(function() {
		module('todo');

		inject(function($controller) {
			$controller('TodoController', {
				$scope: scope
			});
		});

	});
	// This is the act and assert step
	it('should define a list object', function() {
		expect(scope.list).toBeDefined();
	});

	describe('when using a to-do list', function() {

		beforeEach(function() {
			scope.add('repeat');
		});
		it('should add item to last item in list', function() {
			var lastIndexOfList = scope.list.length - 1;
			expect(scope.list[lastIndexOfList]).toEqual('repeat');
		})
	});
});