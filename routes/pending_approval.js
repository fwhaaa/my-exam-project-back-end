const Router = require('koa-router');
var router = new Router({
    prefix:'/api/pending_approval',
});

const pending_approval = require('../controller/pending_approval');

router.post('/add/exam', pending_approval.add);
router.get('/list/paper', pending_approval.list);
router.get('/score/paper', pending_approval.student);
router.post('/add/score', pending_approval.score);

module.exports = router;