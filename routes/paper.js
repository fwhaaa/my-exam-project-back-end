const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/paper'
});


const paper = require('../controller/paper');

rourter.post('/paperManagement/add',paper.addPaper);




module.exports = rourter;