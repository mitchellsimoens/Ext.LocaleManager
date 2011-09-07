Ext.Loader.setConfig({
    enabled : true
});

Ext.LocaleManager.setConfig({
    ajaxConfig : {
        method : 'GET',
        async  : false
    },
    path       : 'locale.php',
    type       : 'ajax'
});

Ext.create('Ext.app.Application', {
    name     : 'app',
    language : 'en',

    autoCreateViewport : true,

    requires : [
        'app.view.Viewport'
    ],

    controllers : [
        'app.controller.Base'
    ],

    onBeforeLaunch: function() {
        var me   = this,
            lang = me.language;

        Ext.LocaleManager.setConfig({
            language : lang
        });

        Ext.LocaleManager.loadLocale();

        Ext.app.Application.prototype.onBeforeLaunch.call(me);
    }
});