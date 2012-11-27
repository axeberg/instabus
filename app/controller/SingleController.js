Ext.define('Instabus.controller.SingleController', {
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      currentView: "singlecontainer",
      backButton:  "button[action=back]",
      mapButton :  "button[action=displayMap]",
    },

    control: {
      backButton: {
        tap: "renderResultsList"
      },
      mapButton: {
        tap: "renderMaps"
      }
    }
  },

  renderResultsList: function() {
    listView = Ext.create("Instabus.view.ListContainer", {});
    Ext.Viewport.animateActiveItem(listView, { type: 'slide', direction: 'right'});
  },

  renderMaps: function() {
    alert('No maps yet');
  }

})