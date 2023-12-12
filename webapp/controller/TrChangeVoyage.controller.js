sap.ui.define(
  [
      "sap/ui/core/mvc/Controller",
      "sap/m/MessageToast"
  ],
  function(BaseController, MessageToast) {
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
        },

        toggleNavContainer: function() {
          var navCon = this.byId("navCon1");
          var bar = this.byId("HBox10");
          // Get the current visibility state of the NavContainer
          var currentVisibility = navCon.getVisible();
         
          // Toggle the visibility state
          navCon.setVisible(!currentVisibility);
          bar.setVisible(!currentVisibility);
        },

        handleUploadComplete: function(oEvent) {
          var sResponse = oEvent.getParameter("response"),
            aRegexResult = /\d{4}/.exec(sResponse),
            iHttpStatusCode = aRegexResult && parseInt(aRegexResult[0]),
            sMessage;
    
          if (sResponse) {
            sMessage = iHttpStatusCode === 200 ? sResponse + " (Upload Success)" : sResponse + " (Upload Error)";
            MessageToast.show("uploaded.");
          }
        },
    
        handleUploadPress: function() {
          var oFileUploader = this.byId("fileUploader");
          oFileUploader.checkFileReadable().then(function() {
            oFileUploader.upload();
          },
           function(error) {
            MessageToast.show("The file cannot be read. It may have changed.");
          }).then(function() {
            oFileUploader.clear();
            console.log(oFileUploader);
          });
        },

        
        

        
    });
  }
);
  