Ext.application({
    name: 'Instabus',

    models:      ['BookmarkModel', 'ListModel', 'MapModel'],
    stores:      ['BookmarkStore', 'ListStore', 'MapStore'],
    views:       ['Main', 'ListContainer', 'List', 'Reminder', 'Ticket', 'Single', 'AddBookmark', 'BrowseBookmarkContainer', 'BrowseBookmark', 'Map'],
    controllers: ['MainController', 'BrowseBookmarkController', 'ListController', 'SingleController'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Instabus.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
