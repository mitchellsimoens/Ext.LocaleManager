Ext.define('app.controller.Base', {
    extend : 'Ext.app.Controller',

    init: function() {
        var me = this;

        me.control({
            'appform' : {
                afterrender: me.initDropTarget
            }
        });
    },

    initDropTarget: function(form) {
        var body     = form.body,
            targetEl = body.dom,
            target   = Ext.create('Ext.dd.DropTarget', targetEl, {
                ddGroup : 'GridExample',
                notifyEnter: function(ddSource, e, data) {
                    body.stopAnimation();
                    body.highlight();
                },
                notifyDrop : function(ddSource, e, data) {
                    var rec = ddSource.dragData.records[0];

                    form.getForm().loadRecord(rec);
                    ddSource.view.store.remove(rec);

                    return true;
                }
            });
    }
});