Ext.define('Instabus.controller.ListController', {
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      backButton: 'button[action=backButton]',
      pricesButton: 'button[action=showPrices]',
      listContainer: 'listcontainer',
      singleContainer: 'singlecontainer',
      pricePicker: 'pricepicker',
    },

    control: {

      listContainer: {
        backButton: {
          tap: 'renderMainView'
        },
        modalView: 'renderModal',
        pricePicker: 'showPricePicker',
        singleView: 'renderSingleView'
      },

    }

  },

  renderSingleView: function() {
    singleView = Ext.create('Instabus.view.Single', {});
    Ext.Viewport.animateActiveItem(singleView, { type: 'slide', direction: 'left'});
  },

  renderMainView: function() {
    mainView = Ext.create('Instabus.view.Main', {});
    Ext.Viewport.animateActiveItem(mainView, { type: 'slide', direction: 'right'});
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