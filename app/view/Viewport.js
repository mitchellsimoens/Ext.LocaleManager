Ext.define('app.view.Viewport', {
    extend : 'Ext.container.Viewport',
    alias  : 'widget.viewport',

    requires : [
        'app.view.AppForm',
        'app.view.AppGrid',
        'app.model.Language',
        'app.store.Language'
    ],

    layout : {
        type  : 'vbox',
        align : 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items : me.buildItems()
        });

        me.callParent();
    },

    buildItems: function() {
        return [
            {
                xtype  : 'container',
                height : 50,
                layout : {
                    type  : 'hbox',
                    align : 'middle'
                },
                items  : [
                    {
                        xtype            : 'container',
                        flex             : 1,
                        height           : 50,
                        styleHtmlContent : true,
                        html             : '<h1>' + Ext.String.format(Ext.LocaleManager.get('welcome', 'Welcome {0}!'), 'Mitchell Simoens') + '</h1>'
                    },
                    {
                        xtype        : 'combobox',
                        fieldLabel   : 'Language',
                        store        : Ext.create('app.store.Language'),
                        queryMode    : 'local',
                        displayField : 'text',
                        valueField   : 'abbr'
                    }
                ]
            },
            {
                xtype       : 'panel',
                bodyPadding : '5',
                layout      : 'hbox',
                items       : [
                    {
                        xtype : 'appgrid'
                    },
                    {
                        xtype : 'appform'
                    }
                ]
            }
        ];
    }
});