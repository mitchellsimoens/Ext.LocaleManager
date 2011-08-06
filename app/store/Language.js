Ext.define('app.store.Language', {
    extend : 'Ext.data.Store',
    model  : 'app.model.Language',

    sorters : [
        {
            property  : 'text',
            direction : 'ASC'
        }
    ],

    data : [
        { abbr : 'en', text : 'English' },
        { abbr : 'es', text : 'Spanish' },
        { abbr : 'de', text : 'German'  }
    ]
});