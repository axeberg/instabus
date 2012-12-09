Ext.define('Instabus.view.ListContainer', {
    extend: 'Ext.Container',
    alias: 'widget.listcontainer',

    requires: [
      'Ext.picker.Picker',
      'Ext.TitleBar',
      'Ext.MessageBox'
    ],

    config: {
      layout: {
        type: 'fit'
      }
    },

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
        action: 'showPrices',
        align: 'right',
        text: 'Price',
        iconMask: true,
        handler: function() {

          var pricePicker = Ext.create('Ext.Picker', {
            xtype: 'pricepicker',
            toolbar: {
                ui: 'light',
                title: 'Show prices for:'
            },
            doneButton: 'Done',
            cancelButton: 'Cancel',
            slots: [
                {
                    name : 'show_prices',
                    data : [
                        {text: 'Reg. price Adult', value: 1},
                        {text: 'Reg. price Child', value: 2},
                        {text: 'Reg. price Family', value: 3},
                        {text: 'Jojo Adult', value: 4},
                        {text: 'Jojo Child', value: 5},
                        {text: 'Jojo Family', value: 6}
                    ]
                }
            ]
          });

          Ext.Viewport.add(pricePicker);
          pricePicker.show;

        }
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

      var topHeaderBar = {
        xtype: 'spacer',
        docked: 'top',
        html: '<div class="list-headbar"><div class="list-headbar-date" style="float:left;">2012-12-03</div><div class="list-headbar-travel-time">Travel time</div><div class="list-headbar-info">Info</div></div>'
      };

      var resultList = {
        xtype: 'resultlist',
        store: Ext.getStore('ListStore'),
        listeners: {
          itemtap: { fn: this.onItemTap, scope: this },
          itemswipe: { fn: this.onItemSwipe, scope:this }
        }
      };

      this.add([topToolBar, topHeaderBar, resultList]);
    },

    onItemTap: function (list, record, target, index, evt, options) {
      console.log('tapped');
      this.fireEvent('singleView', this, record);
    },

    onItemSwipe: function (dataView, index, target, record) {
      console.log('swiped '+ index);

      this.overlay = Ext.Viewport.add({
        xtype: 'panel',
        modal: true,
        hideOnMaskTap: true,
        centered: true,
        scrollable: 'vertical',
        showAnimation: {
            type: 'slide',
            duration: 300,
            direction:'down'
        },
        width: Ext.os.deviceType == 'Phone' ? 260 : 700,
        height: Ext.os.deviceType == 'Phone' ? 220 : 600,
        html: '<h4>Create a reminder for this specific item</h4>',
        styleHtmlContent: true,
        items: [
         {
            xtype: 'button',
            text: 'Remind me',
            ui: 'confirm',
            centered: true,
            height: 45,
            action: 'createReminder',
            handler: function() {

              Ext.Ajax.request({
                  url: '/app/ajax.php',

                  success : function(response, options) {
                      console.log(response);
//                      Ext.Msg.alert("Reminder created");
                  },

                  failure : function(response, options) {
                      Ext.Msg.alert("Failure" + response.responseText + " "
                              + options.responseText);
                  }
              });
            }
          }
        ]

      });

      this.overlay.show();
//      this.fireEvent('modalView', this, record)
    },
});