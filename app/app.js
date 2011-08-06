Ext.Loader.setConfig({
    enabled : true
});

Ext.create('Ext.app.Application', {
    name     : 'app',
    language : 'en',

    autoCreateViewport : false,

    requires : [
        'app.view.Viewport'
    ],

    controllers : [
        'app.controller.Base'
    ],

    launch: function() {
        var me       = this,
            lang     = me.language,
            callback = function(manager) {
                me.viewport = me.getView('Viewport').create();
            };

        Ext.LocaleManager.setConfig({
            language : lang
        });

        Ext.LocaleManager.loadLocale(callback);
    }
});