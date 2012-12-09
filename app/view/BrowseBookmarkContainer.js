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
        listeners: {
          tap: { fn: this.onEditButtonTap, scope: this }
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
        id: 'bookmarks',
        store: Ext.getStore('BookmarkStore'),
        listeners: {
          itemtap: { fn: this.onItemTap, scope: this },
          itemswipe: { fn: this.onItemSwipe, scope:this }
        }
      };

      this.add([topToolBar, resultList]);
    },

    onEditButtonTap: function (record) {
      this.fireEvent('editBookMarkList', this, record);
    },

    onItemTap: function (list, record, target, index, evt, options) {
      console.log('tapped ' + record);
      this.fireEvent('singleView', this, record);
    },

    onItemSwipe: function (dataView, index, target, record) {
      console.log('swiped ' + index);
    },

});