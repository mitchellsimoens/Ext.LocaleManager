Ext.define('app.view.Viewport', {
    extend : 'Ext.container.Viewport',
    alias  : 'widget.viewport',

    requires : [
        'app.view.AppForm',
        'app.view.AppGrid'
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
                xtype            : 'container',
                height           : 50,
                styleHtmlContent : true,
                html             : '<h1>' + Ext.String.format(Ext.LocaleManager.get('welcome'), 'Mitchell Simoens') + '</h1>'
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