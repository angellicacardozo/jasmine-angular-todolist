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
			vm.removeSelection= [];
		});
		it('should add item to last item in list', function() {
			var lastIndexOfList = vm.list.length - 1;
			expect(vm.list[lastIndexOfList]).toEqual('repeat');
		});
		it('should add item to removeSelection list when required', function() {
			var expectedRemoveSelectionLength= vm.removeSelection.length + 1;
			vm.toggleRemove(vm.list[0]);
			expect(vm.removeSelection.length).toBe(expectedRemoveSelectionLength);
		});
		it('should add and remove item from removeSelection list when required', function() {
			var expectedRemoveSelectionLength= 0;
			vm.toggleRemove(vm.list[0]);
			vm.toggleRemove(vm.list[0]);
			expect(vm.removeSelection.length).toBe(expectedRemoveSelectionLength);
		});
		it('should remove one from the list', function() {
			var expectedLengthOfList = vm.list.length - 1;
			var itemsToRemove = [vm.list[0]];

			vm.remove(itemsToRemove);

			expect(vm.list.length).toBe(expectedLengthOfList);
		});
		it('should remove two items from the list', function() {
			var expectedLengthOfList = vm.list.length - 2;
			var itemsToRemove = [vm.list[0], vm.list[1]];

			vm.remove(itemsToRemove);

			expect(vm.list.length).toBe(expectedLengthOfList);
		})
	});
});