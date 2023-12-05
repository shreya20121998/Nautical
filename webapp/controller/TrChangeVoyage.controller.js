sap.ui.define(
  [
      "sap/ui/core/mvc/Controller"
  ],
  function(BaseController) {
    "use strict";

    return BaseController.extend("nauticalfe.controller.TrChangeVoyage", {
      onInit() {
        var hideButton = this.byId("Hide");
        if (hideButton) {
              hideButton.attachPress(this.toggleNavContainer.bind(this));
        }
       

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
    },
        toggleNavContainer: function() {
          var navCon = this.byId("navCon");
          var bar = this.byId("HBox10");
          // Get the current visibility state of the NavContainer
          var currentVisibility = navCon.getVisible();
         
          // Toggle the visibility state
          navCon.setVisible(!currentVisibility);
          bar.setVisible(!currentVisibility);
        }
    });
  }
);
  