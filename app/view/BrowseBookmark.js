Ext.define('Instabus.view.BrowseBookmark', {
    extend: 'Ext.List',
    alias: 'widget.bookmarklist',

    config: {
      loadingText: 'Loading Bookmarks...',
      emptyText: '<div class=\'notes-list-empty-text\'>No bookmarks yet.</div>',
      selectable: true,
      itemTpl: '<div class=\'list-item-bookmark-title\'>{title}</div><div class=\'list-item-from\'>From: {from}</div><div class=\'list-item-to\'>To: {to}</div><div class=\'list-item-travel-time-total\'>Total travel time: {travel_time_total}</div><div class=\'list-item-bookmark-details\'>{details}</div>',

    },

});