/**
 * Created by socomo14 on 10/1/15.
 */
var express=require('express');
var app=express();
app.get('/search',function(request,response)
{
    var qstring=request.query;
    //console.log(qstring + " is query string")
    response.send(qstring);
});
app.listen(process.argv[2]);