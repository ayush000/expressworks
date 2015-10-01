/**
 * Created by socomo14 on 10/1/15.
 */
var fs=require('fs');
var express=require('express');

var app=express();
app.get('/books',function(request,response)
{
    fs.readFile(process.argv[3],'utf8',function(err,data)
    {
        if(err)
        {
            console.log("Error: "+err);
        }
        else
        {
            response.send(data);
        }
    });
});
app.listen(process.argv[2]);