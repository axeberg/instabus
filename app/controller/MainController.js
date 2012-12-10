Ext.define('Instabus.controller.MainController', {
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      mainView: "#MainView",
      viewBookMarksButton : "button[action=viewBookMarks]",
      mapViewButton : "button[action=showMap]",
      submitButton : "button[action=displayAlternatives]",
    },

    control: {
      viewBookMarksButton: {
        tap: "renderBookMarks"
      },
      mapViewButton: {
        tap: "renderMapView"
      },
      submitButton: {
        tap: "renderResults"
      }
    }
  },

  renderBookMarks: function() {
    viewBookmarkView = Ext.create("Instabus.view.BrowseBookmarkContainer", {});
    Ext.Viewport.animateActiveItem(viewBookmarkView, { type: 'slide', direction: 'left'});
  },

  renderMapView: function() {
    viewMapView = Ext.create("Instabus.view.Map", {});
    Ext.Viewport.animateActiveItem(viewMapView, { type: 'slide', direction: 'left'});
  },

  renderResults: function() {
    listView = Ext.create("Instabus.view.ListContainer", {});
    Ext.Viewport.animateActiveItem(listView, { type: 'slide', direction: 'left'});
  }

})