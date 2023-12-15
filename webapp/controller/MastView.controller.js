sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.MastView", {
        onInit() {
        },
        onVesselPress:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteVesselType");
        },
        onCostMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteCostMaster");
        },
        onEventMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteEventMaster");
        },
        onPortLocMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RoutePortLocMaster");
        },
        onBusinessPress: function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteBusinessPartner");
        },
        onConfigPress: function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteConfigRelease");
        },
        onPortLocUpload:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RoutePortLocUpload");
        },
        onPortUpload:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RoutePortUpload");
        },
        onApiurl:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteMastApiUrl");
        },
        onPortMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RoutePortMaster");
        },
        onRefDocIndicator:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteRefDocIndicator");
        }



      });
    }
  );
  