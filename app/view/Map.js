Ext.define("Instabus.view.Map", {
    extend: 'Ext.Panel',
    alias: "widget.mapcontainer",

    requires: [
      'Ext.Map'
    ],

    config: {
      xtype: 'MapView',
      fullscreen: true,
      layout: {
        type: 'card',
      }
    },

    initialize: function() {

      this.callParent(arguments);

      var backButton = {
        action: 'back2Button',
        align: 'left',
        iconMask: true,
        text: 'Back',
        ui: 'back',
      };

      var topToolBar = {
        docked: 'top',
        title: 'Maps',
        xtype: 'toolbar',
        items: [
          backButton,
          {
            xtype: 'spacer',
          }
        ]
      };

      var mapElement = {
        xtype: 'map',
          useCurrentLocation: true,
          fullscreen: true,
          layout: {
            type: 'fit',
          },
          mapOptions: {
            zoom: 17,
            navigationControl: true,
            navigationControlOptions:
            {
                style: google.maps.NavigationControlStyle.BIG
            }
          },
          listeners: {
            maprender : function(comp, map){
                var store = Ext.getStore('MapStore'); // Ext.getStore('StoreId')
                var count = store.getCount();

                store.load({
                    scope: this,
                    callback: function(records) {
                      console.log(records)
                    }
                });

                new google.maps.Marker({
                    position: new google.maps.LatLng(this._geo.getLatitude(), this._geo.getLongitude()),
                    map: map,
                });

            }
          }
      };

      this.add([topToolBar, mapElement]);
    },

});