const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/question',
});

const question = require('../controller/question');





rourter.post('/addQuestion/singleChoice', question.addSingleChoiceQuestion);
rourter.get('/questionList/singleChoice', question.singleChoiceList);
rourter.post('/deleteQuestion/singleChoice', question.deleteSingleChoice)
rourter.post('/editQuestion/singleChoice', question.editSingleChoice)


rourter.post('/addQuestion/multipleChoice',question.addMultipleChoiceQuestion);
rourter.get('/questionList/multipleChoice',question.multipleChoiceList);
rourter.post('/deleteQuestion/multipleChoice',question.deleteMultipleChoice)
rourter.post('/editQuestion/multipleChoice',question.editMultipleChoice)

rourter.post('/addQuestion/judge',question.addJudgeQuestion);
rourter.get('/questionList/judge',question.judgeList);
rourter.post('/deleteQuestion/judge',question.deleteJudge)
rourter.post('/editQuestion/judge',question.editJudge)

rourter.post('/addQuestion/saq',question.addSaqQuestion);
rourter.get('/questionList/saq',question.saqList);
rourter.post('/deleteQuestion/saq',question.deleteSaq)
rourter.post('/editQuestion/saq',question.editSaq)




module.exports = rourter;