Ext.define('Instabus.controller.MainController', {
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      mainView: "#MainView",
      viewBookMarksButton : "button[action=viewBookMarks]",
      submitButton : "button[action=displayAlternatives]",
    },

    control: {
      viewBookMarksButton: {
        tap: "renderBookMarks"
      },
      submitButton: {
        tap: "renderResults"
      }
    }
  },

  renderBookMarks: function() {
    viewBookmarkView = Ext.create("Instabus.view.BrowseBookmark", {});
    Ext.Viewport.animateActiveItem(viewBookmarkView, { type: 'slide', direction: 'left'});
  },

  renderResults: function() {
    listView = Ext.create("Instabus.view.ListContainer", {});
    Ext.Viewport.animateActiveItem(listView, { type: 'slide', direction: 'left'});
  }

})