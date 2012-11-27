Ext.define("Instabus.model.ListModel", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'departure', type: 'string' },
            { name: 'travel_time', type: 'string' },
            { name: 'details', type: 'string' }
        ]
    }
});
