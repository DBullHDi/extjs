/**
 * @class MyApp.controller.invoices.Invoices
 * @extends Ext.app.Controller
 * @author Crysfel Villa <crysfel@bleext.com>
 *
 * Description
 */

Ext.define('MyApp.controller.invoices.Invoices',{
	extend      : 'Ext.app.Controller',
	views		: [
		'MyApp.view.invoices.InvoiceMain'
	],

	init   : function(){
		var me = this;


	},

	addContent: function(){
		this.container.add({
			xtype : 'invoicemain',
			itemId: 'invoiceMain'
		});
	}
});