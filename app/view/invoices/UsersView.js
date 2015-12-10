/**
 * Created by FExJohn on 11/29/2015.
 */


Ext.define('MyApp.view.invoices.UsersView',{
    extend: 'Ext.view.View',
    xtype:'usersview',
    cls:"usersView",

    requires:[
        'MyApp.store.invoices.User'
    ],



    emptyText: 'No user here',
    itemSelector: 'div.selector',
    width:500,
    //height:200,
    tpl:[
        '<div class="container">',
            '<tpl for="."> ',

                '<tpl if="active == true">',
                    '<div class ="selector active">',
                '<tpl else>',
                    '<div class ="selector">',
                '</tpl>',
                        '<div>{firstName} {lastName}</div>',
                        '<img src="{img}" height="60" width="100">' ,
                    '</div>',

            '</tpl>',
        '</div>'
    ],


    initComponent: function(){

        var me = this;
        me.store = me.buildStore();
        me.callParent();
        me.store.load();
    },

    buildStore	: function(){
        return Ext.create('MyApp.store.invoices.User');
    }

});