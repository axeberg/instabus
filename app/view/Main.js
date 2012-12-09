Ext.define("Instabus.view.Main", {
    extend: 'Ext.Panel',

    requires: [
      'Ext.AutocompleteField',
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
                component: {
                  xtype: 'container',
                  layout: 'hbox',
                  items: [
                    {
                      xtype: 'autocompletefield',
                      value: '',
                      config: {
                        proxy: {
                              type: 'ajax',
                              url: 'https://api.trafiklab.se/samtrafiken/resrobot/FindLocation.json?apiVersion=2.1&coordSys=RT90&key=2ba8cd705bc13f1b4cd41956aaab73d9',
                              reader: {
                                type: 'json',
                                rootProperty: 'findlocationresult'
                              }
                            },
                            resultsHeight: 100,
                        needleKey: 'from',
                        labelKey: 'text',
                      }
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
                      xtype: 'autocompletefield',
                      value: '',
                      config: {
                        proxy: {
                              type: 'ajax',
                              url: 'https://api.example.com/search',
                              reader: {
                                type: 'json',
                                rootProperty: 'results'
                              }
                            },
                            resultsHeight: 300,
                        needleKey: 'term',
                        labelKey: 'name',
                      }
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
