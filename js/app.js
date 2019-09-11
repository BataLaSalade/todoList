/*global app, $on */
/**
 * Global application
 * @class
 */
var App = (function () {
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 * @memberof App
	 * @param {String} name The name of your new to do list.
	 */
	function Todo(name) {
		this.storage = new app.Store(name);
		this.model = new app.Model(this.storage);
		this.template = new app.Template();
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view);
	}

	/**
	 * A new Todo list
	 * @name App#todo
	 */
	var todo = new Todo('todos-vanillajs');

	/**
	 * Set the view to load from navigator
	 * @memberof App
	 * @function
	 */
	function setView() {
		todo.controller.setView(document.location.hash);
	}
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
})();
