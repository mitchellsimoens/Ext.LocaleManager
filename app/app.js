Ext.Loader.setConfig({
    enabled : true
});

Ext.create('Ext.app.Application', {
    name : 'app',

    autoCreateViewport : false,

    requires : [
        'app.view.Viewport'
    ],

    controllers : [
        'app.controller.Base'
    ],

    launch: function() {
        var me       = this,
            callback = function(manager) {
                me.getView('Viewport').create();
            };

        Ext.LocaleManager.loadLocale(callback);
    }
});