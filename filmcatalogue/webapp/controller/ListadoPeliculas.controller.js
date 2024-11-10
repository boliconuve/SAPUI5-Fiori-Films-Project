sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("filmcatalogue.controller.ListadoPeliculas", {
            onInit: function () {
                
            },

            onPress: function (oEvent) {
                alert("Presionado!");
            }


        });
    });
