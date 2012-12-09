Ext.define('Instabus.view.List', {
    extend: 'Ext.List',
    alias: 'widget.resultlist',

    requires: [
    'Ext.plugin.PullRefresh',
    ],

    config: {
      loadingText: 'Loading Results...',
      emptyText: '<div class=\'notes-list-empty-text\'>No travels found.</div>',
      onItemDisclosure: true,
      selectable: true,
      itemTpl: '<div class=\'list-item-departure\'>{departure}<div class=\'list-item-travel-time\'>{travel_time}</div></div><div class=\'list-item-details\'>{details}</div><div class=\'list-item-info\'>{info}<div class=\'list-item-price\'>{price}</div></div>',

      plugins: [
        {
          xclass: 'Ext.plugin.PullRefresh',
          pullRefreshText: 'Pull down to refresh',
        },
      ],
    },

});