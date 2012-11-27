Ext.define("Instabus.view.ListContainer", {
    extend: 'Ext.Container',
    alias: "widget.listcontainer",

    initialize: function() {

      this.callParent(arguments);

      var backButton = {
        action: 'backButton',
        align: 'left',
        iconMask: true,
        text: 'Back',
        ui: 'back',
      };

      var pricesButton = {
        action: 'pricesButton',
        align: 'right',
        text: 'Price',
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
          }, pricesButton
        ]
      };

      var resultList = {
        xtype: "resultlist",
        store: Ext.getStore("ListStore"),
        listeners: {
            itemtap: { fn: this.onItemTap, scope: this }
        }
      };

      this.add([topToolBar, resultList]);
    },

    onItemTap: function (list, record, target, index, evt, options) {
      console.log("tapped");
      this.fireEvent('singleView', this, record);
    },

    config: {
      layout: {
        type: 'fit'
      }
    }
});