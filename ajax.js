Ext.LocaleManager.setConfig({
    ajaxConfig : {
        method : 'GET',
        async  : false
    },
    language   : 'es',
    ns         : 'locale',
    path       : 'locale.php',
    type       : 'ajax'
});

Ext.onReady(function() {
    var lm       = Ext.LocaleManager,
        callback = function(manager) {
            console.log('Match Found: ' + manager.get('buttons.action', 'Hello'));
            console.warn('Match Not Found: ' + manager.get('doesNotExist', 'Default Value'));
        };

    console.log('Before Ext.LocaleManager is loaded: ' + lm.get('actions', 'Hello'));

    lm.loadLocale(callback);

    console.log('Does this show right away?');
});