/**
 * Created by FExJohn on 11/29/2015.
 */


Ext.define('MyApp.model.invoices.User', {
    extend:'Ext.data.Model',

    fields:[
        {name: 'id', type: 'int'} ,
        'avatar',
        'firstName',
        'twitter_account',
        'lastName',
        {name: 'active' , type:'boolean'},
        'img'
    ]


});