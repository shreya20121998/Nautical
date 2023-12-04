sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "sap/ui/model/json/JSONModel",
	"sap/ui/webc/main/Toast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";
 
        return Controller.extend("nauticalfe.controller.TrCreateVoyagePlan", {
            onInit: function () {
               
               
            },
            
    
            handleNav: function(evt) {
                var navCon = this.byId("navCon");
                var target = evt.getSource().data("target");
                if (target) {
                    var animation = this.byId("animationSelect").getSelectedKey();
                    navCon.to(this.byId(target), animation);
                } else {
                    navCon.back();
                }
            }
    });
})