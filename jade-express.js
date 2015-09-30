/**
 * Created by swarn on 30/09/15.
 */
var express=require('express');
var path=require('path');
//var jade=require('jade');
var app=express();
//app.set('views','public');
app.set('views',process.argv[3]);
app.set('view engine','jade');
app.get('/home',function(request,response)
{
    response.render('index.jade',{date:new Date().toDateString()});
});
app.listen(process.argv[2]);