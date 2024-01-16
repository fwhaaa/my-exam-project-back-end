const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/teacher'
});

const teacher = require('../controller/teacher');

rourter.post('/addQuestion/singleChoice',teacher.addSingleChoiceQuestion);
rourter.get('/questionList/singleChoice',teacher.singleChoiceList);
rourter.post('/deleteQuestion/singleChoice',teacher.deleteSingleChoice)
rourter.post('/editQuestion/singleChoice',teacher.editSingleChoice)


rourter.post('/addQuestion/multipleChoice',teacher.addMultipleChoiceQuestion);
rourter.get('/questionList/multipleChoice',teacher.multipleChoiceList);
rourter.post('/deleteQuestion/multipleChoice',teacher.deleteMultipleChoice)



module.exports = rourter;