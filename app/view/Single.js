Ext.define("Instabus.view.Single", {
    extend: 'Ext.Container',
    alias: "widget.singlecontainer",

    initialize: function() {

      this.callParent(arguments);

      var backButton = {
        action: 'back',
        align: 'left',
        iconMask: true,
        text: 'Back',
        ui: 'back',
      };

      var mapButton = {
        action: 'displayMap',
        align: 'right',
        iconCls: 'maps',
        iconMask: true,
      };

      var topToolBar = {
        docked: 'top',
        title: 'Instabus',
        xtype: 'toolbar',
        items: [
          backButton,
          {
            xtype: 'spacer',
          }, mapButton
        ]
      };

      this.add([topToolBar]);
    },

});