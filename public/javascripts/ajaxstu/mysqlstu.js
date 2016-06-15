/**
 * Created by guoyi on 2016-6-15.
 */
var express=require('express');
app=express();

console.log('Rest Demo Listening on port 3000');

mysql =require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test'
    });
// app.listen(3000);

connection.query(
    'SELECT * FROM stu',
    function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }

        if(results)
        {
            for(var i = 0; i < results.length; i++)
            {
                console.log("%d\t%s", results[i].ID, results[i].USERNAME);
            }
        }
        connection.end();
    }
);
