const Router = require('koa-router');
var router = new Router({
    prefix:'/api/exam'
});


const exam = require('../controller/exam');

router.post('/examManagement/add',exam.addExam);
router.get('/examManagement/list',exam.examList);
router.get('/examManagement/paper',exam.paper);
router.post('/examManagement/delete',exam.deleteExam)
router.post('/examManagement/edit',exam.editExam);



module.exports = router;