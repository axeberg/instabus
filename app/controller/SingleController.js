Ext.define('Instabus.controller.SingleController', {
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      currentView: "singlecontainer",
      backButton:  "button[action=back]",
      mapButton :  "button[action=displayMap]",
      buyTicketButton : "button[action=buyTicket]",
    },

    control: {
      backButton: {
        tap: "renderResultsList"
      },
      buyTicketButton: {
        tap: "renderTicketView"
      },
      mapButton: {
        tap: "renderMaps"
      }
    }
  },

  renderMaps: function() {
    mapView = Ext.create("Instabus.view.Map", {});
    Ext.Viewport.animateActiveItem(mapView, { type: 'slide', direction: 'left'});
  },

  renderResultsList: function() {
    listView = Ext.create("Instabus.view.ListContainer", {});
    Ext.Viewport.animateActiveItem(listView, { type: 'slide', direction: 'right'});
  },

  renderTicketView: function() {
    ticketView = Ext.create('Instabus.view.Ticket', {});
    Ext.Viewport.animateActiveItem(ticketView, { type: 'slide', direction: 'left'});
  },

})