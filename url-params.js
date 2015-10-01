/**
 * Created by socomo14 on 10/1/15.
 */
var express=require('express');
var crypto=require('crypto');

var app=express();
app.put('/message/:id',function(request,response)
{
    var id = request.params.id;
    var out = crypto.createHash('sha1')
        .update(new Date().toDateString()+id)
        .digest('hex');
    response.send(out);

});
app.listen(process.argv[2]);