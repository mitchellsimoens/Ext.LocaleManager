Ext.define('app.view.AppForm', {
    extend : 'Ext.form.Panel',
    alias  : 'widget.appform',

    bodyStyle   : 'padding: 10px; background-color: #DFE8F6',
    defaultType : 'textfield',
    flex        : 1,
    frame       : true,
    height      : 130,
    labelWidth  : 100,
    margins     : '0 0 0 3',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items : me.buildItems(),

            title : Ext.LocaleManager.get('titles.AppForm')
        });

        me.callParent();
    },

    buildItems: function() {
        var lm = Ext.LocaleManager;

        return [
            {
                fieldLabel : lm.get('fields.name'),
                name       : 'name'
            },
            {
                fieldLabel : lm.get('fields.col1'),
                name       : 'column1'
            },
            {
                fieldLabel : lm.get('fields.col2'),
                name       : 'column2'
            }
        ];
    }
});