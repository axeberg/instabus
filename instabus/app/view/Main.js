Ext.define("Instabus.view.Main", {
    extend: 'Ext.Panel',

    requires: [
      'Ext.Toolbar',
      'Ext.form.FieldSet',
      'Ext.field.Text'
    ],

    config: {
      xtype: 'MainView',
      fullscreen: true,
      layout: {
        type: 'card',
      }
    },

    initialize: function() {

      this.callParent(arguments);

      var bookmarkButton = {
        align: 'right',
        iconCls: 'bookmarks',
        iconMask: true,
        action: 'viewBookMarks'
      };

      var topToolBar = {
        docked: 'top',
        title: 'Instabus',
        xtype: 'toolbar',
        items: [
          {
            xtype: 'spacer',
          }, bookmarkButton
        ]
      };

      var searchForm = {
        items: [
          {
            xtype: 'fieldset',
            title: 'Your location',
            items: [
              {
                xtype: 'textfield',
                autoCaptialize: true,
                clearIcon: true,
                component: {
                  xtype: 'container',
                  layout: 'hbox',
                  items: [
                    {
                      xtype: 'textfield',
                      flex: 5,
                    },
                    {
                      xtype: 'button',
                      flex: 1,
                      iconCls: 'locate',
                      iconMask: true,
                    },
                  ]
                }
              }
            ],
          },
          {
            xtype: 'fieldset',
            title: 'Your destination',
            items: [
              {
                xtype: 'textfield',
                autoCaptialize: true,
                clearIcon: true,
                component: {
                  xtype: 'container',
                  layout: 'hbox',
                  items: [
                    {
                      xtype: 'textfield',
                      flex: 5,
                    },
                    {
                      xtype: 'button',
                      flex: 1,
                      iconCls: 'maps',
                      iconMask: true,
                    },
                  ]
                }
              }
            ],
          },
          {
            xtype: 'button',
            text: 'Take me there',
            ui: 'confirm',
            height: 45,
            action: 'displayAlternatives'
          }
        ]
      }

      this.add([topToolBar, searchForm]);

    },
});
