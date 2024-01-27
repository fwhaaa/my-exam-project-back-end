const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/exam'
});


const exam = require('../controller/exam');

rourter.post('/examManagement/add',exam.addExam);
rourter.get('/examManagement/list',exam.examList);
rourter.get('/examManagement/paper',exam.paper);
rourter.post('/examManagement/delete',exam.deleteExam)
rourter.post('/examManagement/edit',exam.editExam);



module.exports = rourter;