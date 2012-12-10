Ext.define('Instabus.controller.MapController', {
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      backButton: 'button[action=back2Button]',
    },

    control: {
      backButton: {
        tap: 'back'
      },
    },

  },

  back: function() {
    singleView = Ext.create('Instabus.view.Single', {});
    Ext.Viewport.animateActiveItem(singleView, { type: 'slide', direction: 'right'});
  },

  launch: function () {
    this.callParent(arguments);
  },

  init: function () {
    this.callParent(arguments);
  },

});