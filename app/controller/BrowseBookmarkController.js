Ext.define('Instabus.controller.BrowseBookmarkController', {
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      bookmarkContainer: 'bookmarkcontainer',
      backButton: 'button[action=backButton]',
      editButton: 'button[action=editButton]',
    },

    control: {
      backButton: {
        tap: 'back'
      },
      bookmarkContainer: {
        singleView: 'renderSingleView',
        editBookMarkList: 'removeSelectedBookmarkItem'
      }
    },

  },

  back: function() {
    mainView = Ext.create('Instabus.view.Main', {});
    Ext.Viewport.animateActiveItem(mainView, { type: 'slide', direction: 'right'});
  },

  launch: function () {
    this.callParent(arguments);
    Ext.getStore('BookmarkStore').load();
  },

  init: function () {
    this.callParent(arguments);
  },

  renderSingleView: function () {
    singleView = Ext.create('Instabus.view.Single', {});
    Ext.Viewport.animateActiveItem(singleView, { type: 'slide', direction: 'left'});
  },

  removeSelectedBookmarkItem: function () {
    var selection = Ext.getCmp('bookmarks').getSelection();
    Ext.StoreManager.get('BookmarkStore').remove(selection[0]);
  }

});