const bluebird = require('bluebird');//promise化
const connectionModel = require('../models/connection');
	
exports.addSingleChoiceQuestion = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const results = await query(
			`INSERT INTO single_choice VALUES ('${data.questionId}', '${data.stem}', '${data.selectA}', '${data.selectB}', '${data.selectC}','${data.selectD}');`
		);
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