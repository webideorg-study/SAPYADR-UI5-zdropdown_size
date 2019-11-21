sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zdropdown_size.controller.V_Input", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf zdropdown_size.view.V_Input
		 */
		onInit: function() {
			var myModel = this.getOwnerComponent().getModel("GWSAMPLE_BASIC");
			//myModel.setSizeLimit(10);

			this.getView().byId("PGrp").setModel(myModel);
			this.getView().byId("Plant").setModel(myModel);
			
			//debugger;
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf zdropdown_size.view.V_Input
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf zdropdown_size.view.V_Input
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf zdropdown_size.view.V_Input
		 */
		//	onExit: function() {
		//
		//	}

		/**
		 *@memberOf zdropdown_size.controller.V_Input
		 */
		handleChange: function(oEvent) {
			// 获取选择值方式3 -- 获取的仅仅为text，不是key
			console.log(oEvent.getParameters("value").newValue);
		},

		/**
		 *@memberOf zdropdown_size.controller.V_Input
		 */
		GetSelectItem1: function(oEvent) {
			// 获取选择值方式1
			//console.log(this.getView().byId("PGrp").getSelectedKey());

			// 获取选择值方式2
			//console.log(oEvent.getSource().getSelectedKey());

			// 获取选择值方式3 -- 获取的仅仅为text，不是key
			//console.log(oEvent.getParameters("value").newValue);

			// 获取选择值方式4
			//console.log(this.getView().byId("PGrp").getSelectedItem().getKey());

			// 获取选择值方式5
			//console.log(this.getView().byId("PGrp").getSelectedItem().getBindingContext().getProperty("ProductID"));

			// 获取选择值方式6
			console.log(oEvent.getSource().getSelectedItem().getBindingContext().getObject().ProductID);

			//console.log(this.getView().byId("select").getBinding("items"));

			// 获取选择值方式7 -- 内容跟getParameters("value")一致，也挺奇怪的
			//console.log(oEvent.getParameters("itemPressed"));

		},

		/**
		 *@memberOf zdropdown_size.controller.V_Input
		 */
		GetSelectItem2: function(oEvent) {

			// 获取选择值方式8 -- 注意是getParameter，不是getParameters
			console.log(oEvent.getParameter("selectedItem").getBindingContext().getProperty("ProductID"));

			// 获取选择值方式9 -- 注意是getParameter，不是getParameters
			console.log(oEvent.getParameter("selectedItem").getKey());

		}

	});

});