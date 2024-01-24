const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/exam'
});


const paper = require('../controller/exam');

rourter.post('/examManagement/add',exam.addExam);
rourter.get('/examManagement/list',exam.examList);
rourter.get('/examManagement/paper',exam.paperList);
rourter.post('/examManagement/delete',paper.deleteExam)
rourter.post('/examManagement/edit',paper.editExam);



module.exports = rourter;