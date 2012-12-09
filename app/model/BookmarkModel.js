Ext.define('Instabus.model.BookmarkModel', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'title', type: 'string' },
            { name: 'from', type: 'string' },
            { name: 'to', type: 'string' },
            { name: 'details', type: 'string' },
            { name: 'travel_time_total', type: 'string' }
        ]
    }

});