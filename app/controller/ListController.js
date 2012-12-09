Ext.define('Instabus.controller.ListController', {
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      pricesButton: 'button[action=showPrices]',
      listContainer: 'listcontainer',
      singleContainer: 'singlecontainer',
      pricePicker: 'pricepicker',
    },

    control: {

      listContainer: {
        singleView: 'renderSingleView',
        pricePicker: 'showPricePicker',
        modalView: 'renderModal',
      },

    }

  },

  renderSingleView: function() {
    singleView = Ext.create('Instabus.view.Single', {});
    Ext.Viewport.animateActiveItem(singleView, { type: 'slide', direction: 'left'});
  },

  renderModal: function() {
    console.log('render modal');
  },

  showPricePicker: function(pricePicker) {
  },

  launch: function () {
    this.callParent(arguments);
    Ext.getStore('ListStore').load();
  },

  init: function () {
    this.callParent(arguments);
  }

})