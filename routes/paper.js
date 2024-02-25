const Router = require('koa-router');
var router = new Router({
    prefix:'/api/paper'
});


const paper = require('../controller/paper');

router.post('/paperManagement/add',paper.addPaper);
router.get('/paperManagement/list',paper.paperList);
router.post('/paperManagement/delete',paper.deletePaper)
router.post('/paperManagement/edit',paper.editPaper);



module.exports = router;