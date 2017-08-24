var express=require('express');
var router=express.Router();
var mysql=require('mysql');
var formidable=require('formidable');
var fs=require('fs');
var pool=mysql.createPool({
    host:'118.190.90.166',//ip地址
    user:'root',
    password:'root',
    database:'crmData',
    port:3306
});

function query(sql,uname,callback){
	pool.getConnection(function(err,conns){
			//console.log(conns+'>>>'+err)
			conns.query(sql,[uname],function(err,result){
			//console.log(result)
				//释放连接  
             	 conns.release();  
				callback(err,result)
			})
		
	})
}
function inSertUser(sql,uname,pwd,email,callback){
	pool.getConnection(function(err,conns){
		//console.log(conns+'>>>'+err)
			conns.query(sql,[uname,pwd,email],function(err,result){
					//释放连接  
					console.log(result)
	             conns.release();
	             callback(err,result)
			})
				 
	})
}
router.post('/up',function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	var form=new formidable.IncomingForm()  //创建IncomingForm对象
	form.uploadDir='public/upload/tempImg/';
	form.parse(req,function(error,fields,files){
		for(var i in files){
			var file=files[i];
			var fName=(new Date).getTime();  //名字
			switch(file.type){
				case "image/jpeg":
					fName=fName+'.jpg';
					break;
				case "image/png":
					fName=fName+'.png';
					break;

			}
			var newPath='public/upload/'+fName;
			fs.renameSync(file.path,newPath)
			res.send(fName)
		}
	})
})
router.post('/register',function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	var uname=req.body['uname'];
	var pwd=req.body['pwd'];
	var email=req.body['eml']
	query('select * from userdata where uname=?',uname,function(err,result){
		if(err){
				console.log('err'+err.message);	
		}
		if(result!=null&&result!=''){
			res.send({flag:2})
			return;
		}
		if(uname&&pwd&&email){
			console.log(uname,pwd,email)
			inSertUser('insert into userdata(uname,pwd,email) values(?,?,?)',uname,pwd,email,function(err,result){
				if(err){
					console.log('err'+err.message);	
				}
				if(result.insertId>0){
					res.send({flag:1})
				}		
			})
		}else{
			res.send({flag:3})
		}
	})
});
router.post('/userImg',function(req,res){
	res.header("Access-Control-Allow-Origin","*")
	var userImg=req.body['userImg'];
	var uId=req.body['uId']
	console.log('ddd'+userImg,uId)
	pool.getConnection(function(err,conns){
			conns.query('update userdata set userImg=? where id=?',[userImg,uId],function(err,result){
					//释放连接  
				if(err){
					console.log('err'+err.message);	
				}
				console.log('ff'+result)
	             conns.release();
	             if(result.changedRows>0){
	             	res.send({flag:1})
	             }else{
	             	res.send({flag:2})
	             }
			})
						 
		})
})
router.get('/getuImg',function(req,res){
		res.header("Access-Control-Allow-Origin","*")
 		var uId=req.query.getId;
 		pool.getConnection(function(err,conns){
			conns.query('select userImg from userdata where id=?',[uId],function(err,result){
				if(err){
					console.log('err'+err.message);	
				}
	             conns.release();
	             res.send(result)
	             return;
			})
						 
		})
})
module.exports=router;
