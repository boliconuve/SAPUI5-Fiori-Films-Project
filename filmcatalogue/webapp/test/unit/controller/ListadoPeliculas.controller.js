/*global QUnit*/

sap.ui.define([
	"filmcatalogue/controller/ListadoPeliculas.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListadoPeliculas Controller");

	QUnit.test("I should test the ListadoPeliculas controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
