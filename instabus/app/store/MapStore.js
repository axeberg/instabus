Ext.define('Instabus.store.MapStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Instabus.model.MapModel',
        autoLoad: true,
        proxy: {
          type: 'ajax',
          url: 'app/ajax2.php',
          reader: {
            type: 'json',
            rootProperty: 'getdeparturesresult'
          }
        },
    }
});

/* https://api.trafiklab.se/samtrafiken/resrobotstops/GetDepartures.json?apiVersion=2.2&coordSys=RT90&locationId=7400003&timeSpan=30&key=6f4e51160be00a645deb0abc8339d275 */