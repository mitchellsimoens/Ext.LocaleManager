/**
 * @class Ext.LocaleManager
 * @singleton
 * @author Mitchell Simoens <mitchell.simoens@sencha.com>
 * @docauthor Mitchell Simoens <mitchell.simoens@sencha.com>
 *
 * Ext.LocaleManager provides an easy way to load locale files and retrieve text.
 * Configuration is high and setting it is familiar like you do with Ext.Loader.
 *
 * A simple example:
 *
 *     <script type="text/javascript">
 *       Ext.LocaleManager.setConfig({
 *           language : 'es',
 *           ns       : 'locale',
 *           path     : '/locale'
 *       });
 *
 *       Ext.onReady(function() {
 *           var callback = function(manager) {
 *               console.log(manager.get('buttons.action'));
 *           };
 *
 *           Ext.LocaleManager.loadLocale(callback);
 *       });
 *     <script>
 */

Ext.define('Ext.LocaleManager', {
    singleton : true,

    /**
     * @cfg {String} fileTpl
     * A string to format into a file name with the language config. Defaults to 'locale_{0}.js'.
     */
    /**
     * @cfg {String} language
     * The language string to load. Defaults to 'en'.
     */
    /**
     * @cfg {String} ns
     * The namespace the locale will have when loaded. After loading, this will be set to null. Defaults to 'locale'.
     */
    /**
     * @cfg {String} path
     * The path to the locale files WITHOUT a trailing '/'. Defaults to 'locale'.
     */
    /**
     * @cfg {Number} removeJSFileDelay
     * Tie in milliseconds to remove the script tag after loading has been detected. Defaults to 100.
     */

    /**
     * @property {Boolean} _isLoaded
     * @protected
     * Whether or not a locale file has been loaded
     */
    _isLoaded : false,

    /**
     * @private
     */
    _fileTpl : 'locale_{0}.js',
    /**
     * @private
     */
    _locale : {},
    /**
     * @private
     */
    _language : 'en',
    /**
     * @private
     */
    _ns : 'locale',
    /**
     * @private
     */
    _path : 'locale',
    /**
     * @private
     */
    _removeJSFileDelay : 100,

    /**
     * Set the configuration for the manager. This should be called right after ext-core.js
     * (or ext-core-debug.js) is included in the page, e.g.:
     *
     *     <script type="text/javascript" src="ext-core-debug.js"></script>
     *     <script type="text/javascript">
     *       Ext.LocaleManager.setConfig({
     *           language : 'en',
     *           ns       : 'locale',
     *           path     : '/locale'
     *       });
     *     <script>
     *
     * Refer to config options of {@link Ext.LocaleManager} for the list of possible properties.
     *
     * @param {Object} cfg  Object containing any of the config options.
     * @return {Ext.LocaleManager} this
     */
    setConfig: function(cfg) {
        var me = this,
            key, value;

        for (key in cfg) {
            value = cfg[key];
            key = '_' + key;

            me[key] = value;
        }

        return me;
    },

    /**
     * Method to load the locale.
     *
     *     <script type="text/javascript">
     *       var callback = function(manager) {
     *           //some code here
     *       };
     *
     *       Ext.LocaleManager.loadLocale(callback);
     *     <script>
     *
     * @param {Function} callback A callback method to fire when locale has been loaded.
     */
    loadLocale: function(callback) {
        var me       = this,
            path     = me._path,
            fileTpl  = me._fileTpl,
            ns       = me._ns,
            lang     = me._language,
            fileName = Ext.String.format(fileTpl, lang),
            url      = path + '/' + fileName,
            head     = Ext.getHead(),
            script   = document.createElement('script');

        if (ns) {
            Ext.ns(ns);
        }

        Ext.apply(script, {
            src  : url,
            type : 'text/javascript',

            onload: Ext.Function.createDelayed(me.handleLocaleFileLoad, me.removeJSFileDelay, me, [script, callback]),
            onreadystatechange : function() {
                if (this.readyState === 'loaded' || this.readyState === 'complete') {
                    me.handleLocaleFileLoad(script, callback);
                }
            }
        });

        head.appendChild(script);
    },

    /**
     * @private
     */
    handleLocaleFileLoad: function(script, callback) {
        script = Ext.get(script);
        //clean up the script tag as it is no longer needed
        Ext.destroy(script);

        var me       = this,
            ns       = me._ns,
            localeNS = eval(ns);

        me._locale = Ext.apply({}, localeNS);

        //clear the namespace from locale file now that it is cached
        localeNS = null;

        me._isLoaded = true;

        if (typeof callback == 'function') {
            Ext.Function.bind(callback, me, [me])();
        }
    },

    /**
     * Checks to see if a locale has been loaded already.
     * @return {Boolean} this._isLoaded
     */
    isLoaded: function() {
        return this._isLoaded;
    },

    /**
     * Finds the text (or whatever) you have in the locale based on the key you provide.
     *
     *     <script type="text/javascript">
     *       // locale structure looks like:
     *       // {
     *       //     helpText : 'Click here for help'
     *       // }
     *
     *       var helpText = Ext.LocaleManager.get('helpText'); //will return 'Click here for help'
     *     <script>
     *
     * If you have nested Objects that you want to travel, provide a period delimited string.
     *
     *     <script type="text/javascript">
     *       // locale structure looks like:
     *       // {
     *       //     helpText : 'Click here for help',
     *       //     buttons  : {
     *       //         action : 'Action'
     *       //     }
     *       // }
     *
     *       var action = Ext.LocaleManager.get('buttons.action'); //will return 'Action'
     *     <script>
     *
     * @param {String} key The key to look up in the locale.
     * @return {Mixed} locale The text found in locale. Returns undefined if Ext.LocaleManager is not loaded or if key is not found.
     */
    get: function(key) {
        var me     = this,
            locale = me._locale,
            keys   = key.split('.'),
            k      = 0,
            kNum   = keys.length,
            text;

        if (!me.isLoaded()) {
            return undefined;
        }

        for (; k < kNum; k++) {
            key    = keys[k];
            if (locale) {
                locale = locale[key];
            }
        }

        return locale;
    }
});