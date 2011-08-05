Ext.define('app.store.AppGrid', {
    extend : 'Ext.data.Store',
    model  : 'app.model.AppGrid',

    data : [
        { name : "Record 0", column1 : "0", column2 : "0" },
        { name : "Record 1", column1 : "1", column2 : "1" },
        { name : "Record 2", column1 : "2", column2 : "2" },
        { name : "Record 3", column1 : "3", column2 : "3" },
        { name : "Record 4", column1 : "4", column2 : "4" },
        { name : "Record 5", column1 : "5", column2 : "5" },
        { name : "Record 6", column1 : "6", column2 : "6" },
        { name : "Record 7", column1 : "7", column2 : "7" },
        { name : "Record 8", column1 : "8", column2 : "8" },
        { name : "Record 9", column1 : "9", column2 : "9" }
    ],

    proxy : {
        type : 'ajax',
        url  : 'data.json'
    }
});