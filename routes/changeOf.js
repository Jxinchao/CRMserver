var express=require('express');
var router=express.Router();
var mysql=require('mysql');
var pool=mysql.createPool({
    host:'118.190.90.166',//ip地址
    user:'root',
    password:'root',
    database:'crmData',
    port:3306
});

router.get('/changeOf',function(req,res){
	res.header("Access-Control-Allow-Origin","*"); //连接后台
	changeOf(function(err,result){
		res.send(result);
	},'select * from workdata where state')


})




// 函数封装
function changeOf(callback,sql){
	console.log('into sql........')
	pool.getConnection(function(err,connection){
		var sql_q = sql; 
		connection.query(sql_q,function(err,result){
			if(err){
				return;
			}
			connection.release(); //释放连接
			callback(err,result)
		})
	})
}

module.exports=router;