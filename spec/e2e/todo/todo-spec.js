describe('', function() {
	beforeEach(function() {
		browser.get('/');
	});
	// Act and Assertion
	it('', function() {
		var todoListItems = element.all(by.repeater('item in taskVm.list'));
		expect(todoListItems.count()).toBe(3);
	});
	it('', function() {
		var todoInput= element(by.model('taskVm.model'));
		var todoButton= element(by.buttonText('Add item')); 

		todoInput.sendKeys('New item');
		todoButton.click();

		var todoListItems = element.all(by.repeater('item in taskVm.list'));
		expect(todoListItems.count()).toBe(4);
	});
});