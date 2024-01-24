const bluebird = require('bluebird');//promise化
const connectionModel = require('../models/connection');

exports.addExam= async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `INSERT INTO paper (subject,examname,time,paperId) VALUES ('${data.subject}', '${data.examname}', '${data.time}','${data.paperId}');`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('addexam error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.paperList = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `SELECT * FROM paper;`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('paperList error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};
