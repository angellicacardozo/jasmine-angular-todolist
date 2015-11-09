describe('Todo list', function() {
	beforeEach(function() {
		browser.get('/');
	});
	// Act and Assertion
	it('should list todo items', function() {
		var todoListItems = element.all(by.repeater('item in taskVm.list'));
		expect(todoListItems.count()).toBe(3);
	});
	it('should add an item as typed in the input field', function() {
		var todoInput= element(by.model('taskVm.model'));
		var todoButton= element(by.buttonText('Add item')); 

		todoInput.sendKeys('New item');
		todoButton.click();

		var todoListItems = element.all(by.repeater('item in taskVm.list'));
		expect(todoListItems.count()).toBe(4);
	});
	it('should remove an item as selected by the user', function() {
		var todoListItems = element.all(by.repeater('item in taskVm.list'));
		var todoButton= element(by.buttonText('Remove item'));
		var listBox= element(by.css('input[type="checkbox"]'));

		listBox.click();
		todoButton.click();

		todoListItems= element.all(by.repeater('item in taskVm.list'));
		expect(todoListItems.count()).toBe(3);
	});
});