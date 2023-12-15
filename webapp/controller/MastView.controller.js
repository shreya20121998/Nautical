sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.MastView", {
        onInit() {
        },
        onVoyageType:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteVoyageType");
        },
        onVesselType:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteVesselType");
        },
        onCurrencyType:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteCurrencyType");
        },
        onClassMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteClassMaster");
        },
        onCostMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteCostMaster");
        },
        onEventMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteEventMaster");
        },
        onBidMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteBidMaster");
        },
        onUoM:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteUoM");
        },
        onPortLocMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RoutePortLocMaster");
        },
        onRouterMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteRouteMaster");
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
        onPortMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RoutePortMaster");
        },
        onRefDocIndicator:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteRefDocIndicator");
        },
        onApiurl:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteMastApiUrl");
        },
        
        onCountryMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteCountryMaster");
        },
        onCountryMasterUpd:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteCountryMasterUpd");
        },
        onMarinePathUpd:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteMarinePathUpd");
        },
        onMarineDisUpd:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteMarineDisUpd");
        },



      });
    }
  );
  