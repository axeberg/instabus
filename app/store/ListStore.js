Ext.define('Instabus.store.ListStore', {
    extend: 'Ext.data.Store',
    requires:"Ext.data.proxy.LocalStorage",

    config: {
        model: 'Instabus.model.ListModel',
        data: [
            { departure: '14:46-14:56', travel_time: '00:10', details: 'Walk, 2 changes', info: 'ON TIME', price: '30 SEK' },
            { departure: '14:56-15:06', travel_time: '00:10', details: 'Walk, 2 changes', info: 'ON TIME', price: '30 SEK' },
            { departure: '15:06-15:16', travel_time: '00:10', details: 'Walk, 2 changes', info: 'ON TIME', price: '30 SEK' },
            { departure: '15:16-15:26', travel_time: '00:10', details: 'Walk, 2 changes', info: 'ON TIME', price: '30 SEK' },
            { departure: '15:26-15:36', travel_time: '00:10', details: 'Walk, 2 changes', info: 'CANCELLED', price: '30 SEK' },
            { departure: '15:36-15:46', travel_time: '00:10', details: 'Walk, 2 changes', info: 'ON TIME', price: '30 SEK' },
            { departure: '15:46-15:56', travel_time: '00:10', details: 'Walk, 2 changes', info: 'ON TIME', price: '30 SEK' }
        ]
    }
});
