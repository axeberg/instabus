Ext.define("Instabus.store.ListStore", {
    extend: "Ext.data.Store",
    config: {
        model: "Instabus.model.ListModel",
        data: [
            { departure: "14:46-14:56", travel_time: "00:10", details: "Walk then 2 changes" },
            { departure: "14:56-15:06", travel_time: "00:10", details: "Walk then 2 changes" },
            { departure: "15:06-15:16", travel_time: "00:10", details: "Walk then 2 changes" },
            { departure: "15:16-14:26", travel_time: "00:10", details: "Walk then 2 changes" },
            { departure: "15:36-15:46", travel_time: "00:10", details: "Walk then 2 changes" },
            { departure: "15:46-15:56", travel_time: "00:10", details: "Walk then 2 changes" }
        ]
    }
});
