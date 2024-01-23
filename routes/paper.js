const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/paper'
});


const paper = require('../controller/paper');

rourter.post('/paperManagement/add',paper.addPaper);
rourter.get('/paperManagement/list',paper.paperList);
rourter.post('/paperManagement/delete',paper.deletePaper)
rourter.post('/paperManagement/edit',paper.editPaper);



module.exports = rourter;