const bluebird = require('bluebird');//promise化
const connectionModel = require('../models/connection');

exports.userLogin = async function(ctx, next){
	try {
        const data = ctx.request.body;  
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const urlquery = ctx.request.query;
		console.log('!!urlquery',urlquery);
		// const sql_query = urlquery.id ? `SELECT * FROM paper where id = '${urlquery.id}'; ` : `SELECT * FROM paper;`
        let sql_query;
        if(data.username === 'root'){
           sql_query =  `SELECT * FROM manager WHERE username = '${data.username}'; ` 
        } else {
            sql_query =  `SELECT * FROM teacher WHERE teachername = '${data.username}'; ` 
        }
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
        if(results.length>0){
           if(results[0].password === data.password){
            console.log('----enter1');
        	ctx.body = {
                respCode: 1,
                results
            };
           } else{
            console.log('----enter2');
            ctx.body = {
                respCode:  -1,
                respMsg: "密码错误"
            };
           }
        } else {
            console.log('----enter3');
            ctx.body = {
                respCode:  -1,
                respMsg: "用户名错误"
            };
        }
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('----enter4');
    console.log('userLogin error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.studentLogin = async function(ctx, next){
	try {
        const data = ctx.request.body;  
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const urlquery = ctx.request.query;
		console.log('!!urlquery',urlquery);
		// const sql_query = urlquery.id ? `SELECT * FROM paper where id = '${urlquery.id}'; ` : `SELECT * FROM paper;`
    
        const sql_query =  `SELECT * FROM student WHERE studentname = '${data.username}'; ` 
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
        if(results.length>0){
           if(results[0].password === data.password){
            console.log('----enter1');
        	ctx.body = {
                respCode: 1,
                results
            };
           } else{
            console.log('----enter2');
            ctx.body = {
                respCode:  -1,
                respMsg: "密码错误"
            };
           }
        } else {
            console.log('----enter3');
            ctx.body = {
                respCode:  -1,
                respMsg: "用户名错误"
            };
        }
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('----enter4');
    console.log('userLogin error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};