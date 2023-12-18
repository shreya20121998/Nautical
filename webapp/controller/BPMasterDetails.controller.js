sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.BPMasterDetails", {
        onInit() {
          

        },
        onSearch: function () {
          var oTable = this.byId("firstTableId");
          oTable.setVisible(true);
        },
    
        onTableSelectionChange: function (oEvent) {
          var oInput = this.byId("Input");
          var oSelectedItem = oEvent.getParameter("listItem").getBindingContext().getObject();
          oInput.setValue(oSelectedItem.Portn);
        }
        
        
        
      });
    }
  );
  