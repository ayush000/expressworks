/**
 * Created by swarn on 30/09/15.
 */
var express = require('express');
var app=express();
app.get('/home',function(request,response)
{
    response.send("Hello World!")
});
app.listen(process.argv[2]);