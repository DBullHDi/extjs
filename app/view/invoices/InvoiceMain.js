/**
 * Created by FExJohn on 11/29/2015.
 */
Ext.define('MyApp.view.invoices.InvoiceMain', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.invoicemain',
    cls:'invoiceMain',

    requires: [
        'MyApp.view.invoices.UsersView'
    ],

//layout:'hbox',


    initComponent: function () {
        var me = this;

        me.items = [
            {
                xtype: 'usersview'

            }
        ];

        //
        //Ext.create('Ext.Window',{
        //    width:200,
        //    height:200,
        //    items:[{
        //        xtype:'usersview'
        //    }]
        //}).show();


        me.callParent();
    }


});