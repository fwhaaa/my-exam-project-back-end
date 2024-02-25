const Router = require('koa-router');
var router = new Router({
    prefix:'/api/question',
});

const question = require('../controller/question');





router.post('/addQuestion/singleChoice', question.addSingleChoiceQuestion);
router.get('/questionList/singleChoice', question.singleChoiceList);
router.post('/deleteQuestion/singleChoice', question.deleteSingleChoice)
router.post('/editQuestion/singleChoice', question.editSingleChoice)


router.post('/addQuestion/multipleChoice',question.addMultipleChoiceQuestion);
router.get('/questionList/multipleChoice',question.multipleChoiceList);
router.post('/deleteQuestion/multipleChoice',question.deleteMultipleChoice)
router.post('/editQuestion/multipleChoice',question.editMultipleChoice)

router.post('/addQuestion/judge',question.addJudgeQuestion);
router.get('/questionList/judge',question.judgeList);
router.post('/deleteQuestion/judge',question.deleteJudge)
router.post('/editQuestion/judge',question.editJudge)

router.post('/addQuestion/saq',question.addSaqQuestion);
router.get('/questionList/saq',question.saqList);
router.post('/deleteQuestion/saq',question.deleteSaq)
router.post('/editQuestion/saq',question.editSaq)




module.exports = router;