Ext.define('Instabus.controller.BrowseBookmarkController', {
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      bookmarkContainer: 'bookmarkcontainer',
      backButton: "button[action=backButton]",
      editButton: "button[action=editButton]",

    },

    control: {
      editButton: {
        tap: "edit"
      },
      backButton: {
        tap: "back"
      }
    },

  },

  back: function() {
    mainView = Ext.create("Instabus.view.Main", {});
    Ext.Viewport.animateActiveItem(mainView, { type: 'slide', direction: 'right'});
  },

  launch: function () {
    this.callParent(arguments);
    Ext.getStore('BookmarkStore').load();
  },

  init: function () {
    this.callParent(arguments);
  }

});