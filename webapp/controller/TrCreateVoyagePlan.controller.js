sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
 
        return Controller.extend("nauticalfe.controller.TrCreateVoyagePlan", {
            onInit: function () {
                var heading = this.getView().byId("detailsheading")
                heading.addStyleClass("detailsheading")

                var Row1 = this.getView().byId("Row1")
                Row1.addStyleClass("Row1")

                var Row2 = this.getView().byId("Row2")
                Row2.addStyleClass("Row2")

                var Row3 = this.getView().byId("Row3")
                Row3.addStyleClass("Row3")
                
                var vesselOperations = this.getView().byId("vesselOperations")
                vesselOperations.addStyleClass("vesselOperations")

                var navbar = this.getView().byId("navbar")
                navbar.addStyleClass("navbar")
            },
            VesselDetails:function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("TargetVesselDetails")
            },
            TransBidDetails:function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("TransBidDetails")
            },
            longText:function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("longText")
            },
            onNavigationFinished: function(evt) {
			var toPage = evt.getParameter("to");
			MessageToast.show("Navigation to page '" + toPage.getTitle() + "' finished");
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
    });