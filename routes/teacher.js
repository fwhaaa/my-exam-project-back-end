const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/teacher'
});

const teacher = require('../controller/teacher');

rourter.post('/addQuestion/singleChoice',teacher.addSingleChoiceQuestion);
rourter.get('/questionList/singleChoice',teacher.singleChoiceList);
rourter.post('/deleteQuestion/singleChoice',teacher.deleteSingleChoice)



module.exports = rourter;