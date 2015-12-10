/**
 * Created by FExJohn on 11/29/2015.
 */


Ext.define('MyApp.store.invoices.User',{
    extend      : 'Ext.data.Store',

    id:'storeUser',

    requires:[
        'MyApp.model.invoices.User'
    ],


    model		: 'MyApp.model.invoices.User',



    proxy		: {
        type	: 'ajax',
        url		: 'serverside/data/users.json',
        reader	: {
            type	: 'json',
            root	: 'data'
        }
    },

    autoLoad: true
});