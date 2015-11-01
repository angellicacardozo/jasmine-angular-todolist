angular.module('todo');
describe('todoModule', function() {
	beforeEach(function() {
		module('todo'); // Here, we are initializing the module
	});

	/**
	* inject : used for resolving references.
	**/
	it('should provide a version', inject(function(version) {
		expect(version).toEqual('v1.0.1');
	}));

});