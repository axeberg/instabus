Ext.define("Instabus.view.BrowseBookmarkContainer", {
    extend: 'Ext.Container',
    alias: 'widget.bookmarkcontainer',

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

      var editButton = {
        action: 'editButton',
        align: 'right',
        iconMask: true,
        text: 'Edit',
        handler: function() {
          var selection = Ext.getCmp('bookmarklist').getSelection();
          Ext.StoreManager.get('BookMarkStore').remove(selection[0]);
        }
      };

      var topToolBar = {
        docked: 'top',
        title: 'Bookmarks',
        xtype: 'toolbar',
        items: [
          backButton,
          {
            xtype: 'spacer',
          }, editButton
        ]
      };

      var resultList = {
        xtype: 'bookmarklist',
        store: Ext.getStore('BookmarkStore'),
        listeners: {
          itemtap: { fn: this.onItemTap, scope: this },
          itemswipe: { fn: this.onItemSwipe, scope:this }
        }
      };

      this.add([topToolBar, resultList]);
    },

    onItemTap: function (list, record, target, index, evt, options) {
      console.log('tapped ' + record);
    },

    onItemSwipe: function (dataView, index, target, record) {
      console.log('swiped ' + index);
    },

});