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

      var examplePanel = {
        xtype: 'panel',
        html: '<div class=\'list-item-departure\'>Walking</div><div class=\'list-item-details\'>From: Ringgatan 15<br/> To: Malmö Värnhem<br/></div><hr/><div class=\'list-item-departure\'>Bus number 3</div><div class=\'list-item-details\'>From: Malmö Värnhem<br/> To: Malmö Central<br/> Toward: Malmö C<br/></div><hr/>',
        styleHtmlContent: true,
      };

      this.add([topToolBar, examplePanel]);
    },

});