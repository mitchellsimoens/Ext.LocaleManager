Ext.define('app.view.AppGrid', {
    extend : 'Ext.grid.Panel',
    alias  : 'widget.appgrid',

    requires: [
        'app.model.AppGrid',
        'app.store.AppGrid'
    ],

    enableDragDrop : true,
    flex           : 1,
    frame          : true,
    height         : 300,
    stripeRows     : true,
    margins        : '0 2 0 0',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            columns    : me.buildColumns(),
            selModel   : me.buildSelModel(),
            store      : me.buildStore(),
            viewConfig : me.buildViewConfig(),

            title      : me.getLocale('titles.AppGrid', 'Data Grid')
        });

        me.callParent();
    },

    getLocale: function(ns, defaultText) {
        return Ext.LocaleManager.get(ns, defaultText);
    },

    buildColumns: function() {
        return [
            {
                dataIndex : 'name',
                flex      : 1,
                header    : Ext.LocaleManager.get('columnHeaders.name'),
                id        : 'name',
                sortable  : true
            },
            {
                dataIndex : 'column1',
                header    : Ext.LocaleManager.get('columnHeaders.col1'),
                width     : 100
            },
            {
                dataIndex : 'column2',
                header    : Ext.LocaleManager.get('columnHeaders.col2'),
                sortable  : true,
                width     : 100
            }
        ];
    },

    buildSelModel: function() {
        return Ext.create('Ext.selection.RowModel', {
            signleSelect : true
        });
    },

    buildStore: function() {
        return Ext.create('app.store.AppGrid');
    },

    buildViewConfig: function() {
        return {
            loadMask : false,
            plugins     : {
                ddGroup    : 'GridExample',
                enableDrop : false,
                ptype      : 'gridviewdragdrop'
            }
        };
    }
});