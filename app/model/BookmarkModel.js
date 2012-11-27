Ext.define("Instabus.model.BookmarkModel", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c' },
            { name: 'title', type: 'string' },
            { name: 'narrative', type: 'string' }
        ]
    }
});
