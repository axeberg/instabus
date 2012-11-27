Ext.define("Instabus.store.BookmarkStore", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "Instabus.model.BookmarkModel",
        data: [
            { title: "Bookmark 1", narrative: "narrative 1" },
            { title: "Bookmark 2", narrative: "narrative 2" },
            { title: "Bookmark 3", narrative: "narrative 3" },
            { title: "Bookmark 4", narrative: "narrative 4" },
            { title: "Bookmark 5", narrative: "narrative 5" },
            { title: "Bookmark 6", narrative: "narrative 6" }
        ],
        sorters: [{ property: 'dateCreated', direction: 'DESC'}]
    }
});
