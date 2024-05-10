const bluebird = require('bluebird');//promise化
const connectionModel = require('../models/connection');
	

exports.add= async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `INSERT INTO pending_approval (studentId,examId,paperId,answer) VALUES ('${data.studentId}','${data.id}','${data.paperId}', '${data.answer}');`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.list = async function(ctx, next){
	try {
    const data = ctx.request.body;
	    const urlquery = ctx.request.query;
        console.log("----data",data)
		console.log("----query",urlquery)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = urlquery.studentId? `SELECT answer FROM pending_approval WHERE examId = '${urlquery.examId}' AND studentId = '${urlquery.studentId }'; ` :`SELECT * FROM pending_approval where examId = '${urlquery.examId}'; ` 
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('List error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.score= async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `UPDATE pending_approval set score = '${data.point}'  WHERE  examId = '${data.examId}' AND studentId = '${data.studentId}' ;`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.student = async function(ctx, next){
	try {
    const data = ctx.request.body;
	    const urlquery = ctx.request.query;
        console.log("----data",data)
		console.log("----query",urlquery)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query =  `SELECT score FROM pending_approval WHERE examId = '${urlquery.examId}' AND studentId = '${urlquery.studentId }'; ` 
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('List error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};