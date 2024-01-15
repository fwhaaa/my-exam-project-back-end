const bluebird = require('bluebird');//promise化
const connectionModel = require('../models/connection');
	
exports.addSingleChoiceQuestion = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const sql_query = `INSERT INTO single_choice (stem,selectA,selectB,selectC,selectD) VALUES ('${data.stem}', '${data.selectA}', '${data.selectB}', '${data.selectC}','${data.selectD}');`
		console.log('sqlquery',sql_query);
		const results = await query(sql_query);
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

