var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password:  '',
    database: 'moviedb'
});
connection.connect();
var server = express();
server.disable('x-powered-by');
server.set('port',process.env.PORT || 3000);
server.set('view engine','jade');
server.set('views', './views');

server.get('/',function(req,res){
    connection.query('select * from genres',
    function(err,rows,fields){
        if (!err)
        {
            console.log('solution is ' + rows.length);
            res.render('list',{rows: rows});
        }  
        else
            console.log('error' + err);
    });
    
});

server.listen(server.get('port'), function(){
    console.log('express started')
});
