Ext.define("Instabus.view.BrowseBookmark", {
    extend: 'Ext.dataview.List',

    requires: [
      'Ext.dataview.List'
    ],

    config: {
      items: [
        {
          loadingText: "Loading Notes...",
          emptyText: '</pre><div class="notes-list-empty-text">No notes found.</div><pre>',
          onItemDisclosure: true,
          itemTpl: '</pre><div class="list-item-title">{title}</div><div class="list-item-narrative">{narrative}</div><pre>',
          styleHtmlContent: true,
        },
      ]
    },
      initialize: function() {

      var notesList = {
          store: Ext.getStore("Notes"),
          listeners: {
              disclose: { fn: this.onNotesListDisclose, scope: this }
          }
      };


      var backButton = {
        action: 'backButton',
        align: 'left',
        iconMask: true,
        text: 'Back',
        ui: 'back',
      };

      var editButton = {
        action: 'editButton',
        align: 'right',
        text: 'Edit',
        iconMask: true,
      };

      var topToolBar = {
        docked: 'top',
        title: 'Bookmarks',
        xtype: 'toolbar',
        items: [
          backButton,
          {
            xtype: 'spacer',
          }, editButton
        ]
      };

      this.add([topToolBar]);
    }
});