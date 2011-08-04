Ext.LocaleManager.setConfig({
    language : 'en',
    ns       : 'locale',
    path     : '/locale'
});

Ext.onReady(function() {
    var lm       = Ext.LocaleManager,
        callback = function(manager) {
            console.log(manager.get('button.action'));
        };

    lm.loadLocale(callback);
});