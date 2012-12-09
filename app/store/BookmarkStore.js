Ext.define('Instabus.store.BookmarkStore', {
    extend: 'Ext.data.Store',
    requires:"Ext.data.proxy.LocalStorage",

    config: {
        model: 'Instabus.model.BookmarkModel',
        data: [
            { title: 'To the station', from: 'Ringgatan 15, Malmö', to: 'Malmö C', details: '2 changes', travel_time_total: '00:10' },
            { title: 'Visiting home', from: 'Ringgatan 15, Malmö', to: 'Möllebacken, Kristianstad', details: '4 changes', travel_time_total: '01:10' }
        ]
    }

});
