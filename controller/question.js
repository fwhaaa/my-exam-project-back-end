const bluebird = require('bluebird');//promise化
const connectionModel = require('../models/connection');
	


exports.addSingleChoiceQuestion = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `INSERT INTO single_choice (stem,subject,selectA,selectB,selectC,selectD) VALUES ('${data.stem}', '${data.subject}','${data.selectA}', '${data.selectB}', '${data.selectC}','${data.selectD}');`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('addquestion error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

	
exports.singleChoiceList = async function(ctx, next){
	try {
    const data = ctx.request.body;
	const urlquery = ctx.request.query;
        console.log("----data",data)
		console.log("----query",urlquery)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		
		const sql_query = urlquery.subject ? `SELECT * FROM single_choice where subject = '${urlquery.subject}'; ` : `SELECT * FROM single_choice;`  
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('singleChoiceList error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.deleteSingleChoice = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `DELETE  FROM single_choice WHERE id = '${data.id}';`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('singleChoiceList error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.editSingleChoice = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();

		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `UPDATE single_choice SET selectA = '${data.selectA}',selectB = '${data.selectB}',selectC = '${data.selectC}',selectD = '${data.selectD}' WHERE stem = '${data.stem}'; `
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('singleChoiceList error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.addMultipleChoiceQuestion = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query =  `INSERT INTO multiple_choice (stem,subject,selectA,selectB,selectC,selectD) VALUES ('${data.stem}', '${data.subject}','${data.selectA}', '${data.selectB}', '${data.selectC}','${data.selectD}');`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('addquestion error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

	
exports.multipleChoiceList = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const urlquery = ctx.request.query;
		const sql_query = urlquery.subject ? `SELECT * FROM multiple_choice where subject = '${urlquery.subject}'; ` : `SELECT * FROM multiple_choice;`  
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('multiplehoiceList error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.deleteMultipleChoice = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `DELETE  FROM multiple_choice WHERE id = '${data.id}';`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('multipleChoiceList error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};


exports.editMultipleChoice = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `UPDATE multiple_choice SET selectA = '${data.selectA}',selectB = '${data.selectB}',selectC = '${data.selectC}',selectD = '${data.selectD}' WHERE id = '${data.id}'; `
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('multipleChoiceList error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};


exports.addJudgeQuestion = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query =  `INSERT INTO judge (stem,subject) VALUES ('${data.stem}', '${data.subject}');`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('addquestion error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

	
exports.judgeList = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const urlquery = ctx.request.query;
		const sql_query = urlquery.subject ? `SELECT * FROM judge where subject = '${urlquery.subject}'; ` : `SELECT * FROM judge;`  
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('judgeList error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.deleteJudge = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `DELETE  FROM judge WHERE id = '${data.id}';`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('deleteJudge error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};


exports.editJudge = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `UPDATE judge SET stem = '${data.stem}',subject = '${data.subject}' WHERE id = '${data.id}'; `
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('editJudge error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};


exports.addSaqQuestion = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query =  `INSERT INTO saq (stem,subject) VALUES ('${data.stem}', '${data.subject}');`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('addquestion error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

	
exports.saqList = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const urlquery = ctx.request.query;
		const sql_query = urlquery.subject ? `SELECT * FROM saq where subject = '${urlquery.subject}'; ` : `SELECT * FROM saq;`  
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('saqList error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.deleteSaq = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `DELETE  FROM judge WHERE id = '${data.id}';`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('deleteSaq error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};


exports.editSaq = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `UPDATE saq SET stem = '${data.stem}',subject = '${data.subject}' WHERE id = '${data.id}'; `
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
		ctx.body = {
			respCode: 1,
			results
		};
		console.log("----results",results)
		connection.end();
  }catch(e){
    console.log('editSaq error', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};