/*global NodeList */

/**
 * @class
 */
var Helper = (function (window) {
	'use strict';

	/**
	 * Get element(s) by CSS selector:
	 * @memberof Helper
	 * @param  {string} selector The CSS selector
	 * @param  {Document} scope The root node of the HTML document
	 * @returns {Element} documentElement object
	 */
	window.qs = function (selector, scope) {
		return (scope || document).querySelector(selector);
	};

	/**
	 * Get element(s) by CSS selector:
	 * @memberof Helper
	 * @param  {string} selector The CSS selector
	 * @param  {Document} scope The root node of the HTML document
	 * @returns {Element} documentElement object
	 */
	window.qsa = function (selector, scope) {
		return (scope || document).querySelectorAll(selector);
	};

	/**
	 * addEventListener wrapper:
	 * @memberof Helper
	 * @param  {object} target
	 * @param  {string} type
	 * @param  {function} callback
	 * @param  {} useCapture
	 */
	window.$on = function (target, type, callback, useCapture) {
		target.addEventListener(type, callback, !!useCapture);
	};

	/**
	 * Attach a handler to event for all elements that match the selector,
	 * now or in the future, based on a root element
	 * @memberof Helper
	 * @param  {object} target
	 * @param  {string} selector CSS selector
	 * @param  {string} type
	 * @param  {function} handler
	 * @see https://developer.mozilla.org/en-US/docs/Web/Events/blur
	 */
	window.$delegate = function (target, selector, type, handler) {
		function dispatchEvent(event) {
			var targetElement = event.target;
			var potentialElements = window.qsa(selector, target);
			var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

			if (hasMatch) {
				handler.call(targetElement, event);
			}
		}
		
		var useCapture = type === 'blur' || type === 'focus';

		window.$on(target, type, dispatchEvent, useCapture);
	};

	/**
	 * Find the element's parent with the given tag name:
	 * @memberof Helper
	 * @param  {Element} element documentElement
	 * @param  {string} tagName HTML tag
	 * @returns {Element} documentElement object
	 * @example 
	 * $parent(qs('a'), 'div');
	 */
	window.$parent = function (element, tagName) {
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return window.$parent(element.parentNode, tagName);
	};

	/**
	 * Allow for looping on nodes by chaining:
	 * @example
	 * qsa('.foo').forEach(function () {})
	 */
	NodeList.prototype.forEach = Array.prototype.forEach;
})(window);
