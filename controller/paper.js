const bluebird = require('bluebird');//promise化
const connectionModel = require('../models/connection');

exports.addPaper= async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `INSERT INTO paper (subject,papername,singlescore,multiplescore,judgescore,saqscore,questioncontent) VALUES ('${data.subject}', '${data.papername}', '${data.singlescore}','${data.multiplescore}','${data.judgescore}','${data.saqscore}','${data.questioncontent}');`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('addpaper error', e.message, e.stack);
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
		const urlquery = ctx.request.query;
		console.log('!!urlquery',urlquery);
		const sql_query = urlquery.id ? `SELECT * FROM paper where id = '${urlquery.id}'; ` : `SELECT * FROM paper;`
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


exports.deletePaper = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `DELETE  FROM paper WHERE id = '${data.id}';`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('deletePaper error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};


exports.editPaper = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `UPDATE paper SET subject = '${data.subject}',papername = '${data.papername}',singlescore = '${data.singlescore}',multiplescore = '${data.multiplescore}',judgescore = '${data.judgescore}',saqscore = '${data.saqscore}' WHERE id = '${data.id}'; `
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('editPaper error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};