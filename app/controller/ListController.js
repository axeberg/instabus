Ext.define('Instabus.controller.ListController', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      pricesButton: "button[action=showPrices]",
      listContainer: "listcontainer",
      singlecontainer: "singlecontainer",
    },

    control: {

      listContainer: {
        singleView: "renderSingleView"
      },

      pricesButton: {
        tap: "showPrices"
      }

    }

  },

  renderSingleView: function() {
    singleView = Ext.create("Instabus.view.Single", {});
    Ext.Viewport.animateActiveItem(singleView, { type: 'slide', direction: 'left'});
  },


  showPrices: function() {
  },

  launch: function () {
    this.callParent(arguments);
    Ext.getStore("ListStore").load();
    console.log("launch");
  },

  init: function () {
    this.callParent(arguments);
    console.log("init");
  }

})