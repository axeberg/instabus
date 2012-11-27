Ext.define("Instabus.view.List", {
    extend: "Ext.dataview.List",
    alias: "widget.resultlist",

    requires: [
    "Ext.plugin.PullRefresh",
    "Ext.plugin.ListPaging",
    ],

    config: {
      loadingText: "Loading Notes...",
      emptyText: "<div class=\"notes-list-empty-text\">No travels found.</div>",
      onItemDisclosure: true,
      itemTpl: "<div class=\"list-item-title\"><strong>{departure}</strong></div><div class=\"list-item-narrative\">{details}</div>",

      plugins: [
        {
          xclass: "Ext.plugin.PullRefresh",
          pullRefreshText: "Pull down to refresh"
        },
        {
          xclass: "Ext.plugin.ListPaging",
          autoPaging: true
        },
      ],

    }
});