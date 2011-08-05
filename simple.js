Ext.LocaleManager.setConfig({
    language : 'en',
    ns       : 'locale',
    path     : '/locale'
});

Ext.onReady(function() {
    var lm       = Ext.LocaleManager,
        callback = function(manager) {
            console.log(manager.get('buttons.action'));
        };

    lm.loadLocale(callback);
});