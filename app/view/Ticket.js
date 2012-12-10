Ext.define("Instabus.view.Ticket", {
    extend: 'Ext.Container',
    alias: "widget.ticketkcontainer",

    requires: [
      'Ext.Label',
      'Ext.SegmentedButton'
    ],

    initialize: function() {

      this.callParent(arguments);

      var backButton = {
        action: 'back',
        align: 'left',
        iconMask: true,
        text: 'Back',
        ui: 'back',
      };

      var topToolBar = {
        docked: 'top',
        title: 'Buy ticket',
        xtype: 'toolbar',
        items: [
          backButton,
          {
            xtype: 'spacer',
          }
        ]
      };

      var examplePanel = {
        xtype: 'panel',
        html: '<div class=\'list-item-departure\'>From: Malmö Värnhem <div class=\'list-item-travel-time-1\'>14:56</div><br/> To: Malmö Central <div class=\'list-item-travel-time-2\'>14:56</div><br/></div><label class=\'list-item-departure\'>Area: <input disabled="disabled" type="text" value="Malmö" style="height: 30px"></label><hr/>',
        styleHtmlContent: true,
        items: [
          {
            layout: 'vbox',
            docked: 'bottom',
            items: [
              {
                xtype: 'label',
                html: '<strong>Select ticket type</strong>',
                styleHtmlContent: true,
              },
              {
                xtype: 'segmentedbutton',
                allowDepress: true,
                layout: {pack: 'center'},

                items: [
                  {
                    text: 'Adult',
                    pressed: true
                  },
                  {
                    text: 'Youth',
                  },
                  {
                    text: 'Duo/Family',
                  }
                ]
              },
              {
                xtype: 'label',
                html: '<div style="font-size: 12px">Duo/Family is valid for:<ul><li>2 adults and up to 3 children</li><li>1 adult and up to 4 children</li><li>5 children traveling without an adult</li></ul></div>',
                styleHtmlContent: true
              },
              {
                xtype: 'button',
                docked: 'bottom',
                text: 'Create SMS ticket',
                height: 45,
                ui: 'confirm',
                handler: function () {
                  window.location ='sms:' + '72040';
                }
              }
            ]
          }
        ]
      };


      this.add([topToolBar, examplePanel]);
    }
});