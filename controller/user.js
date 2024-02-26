const bluebird = require('bluebird');//promise化
const connectionModel = require('../models/connection');

exports.updatePassword = async function(ctx, next){
	try {
    const data = ctx.request.body;
        console.log("----data",data)
		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
        if(data.username === 'root'){
            sql_query =  `UPDATE manager SET password = '${data.password}' WHERE username= '${data.username}'; `
         } else {
             sql_query = `UPDATE teacher SET password = '${data.password}' WHERE teachername= '${data.username}'; `
         }
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