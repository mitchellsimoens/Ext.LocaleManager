Ext.LocaleManager.setConfig({
    language : 'en',
    ns       : 'locale',
    path     : '/locale'
});

Ext.onReady(function() {
    var lm       = Ext.LocaleManager,
        callback = function(manager) {
            console.log('Match Found: ' + manager.get('buttons.action', 'Hello'));
            console.warn('Match Not Found: ' + manager.get('doNotExist', 'Default Value'));
        };

    console.log('Before Ext.LocaleManager is loaded: ' + lm.get('actions', 'Hello'));

    lm.loadLocale(callback);
});