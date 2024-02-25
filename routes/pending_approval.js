const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/pending_approval',
});

const pending_approval = require('../controller/pending_approval');

rourter.post('/add/exam', pending_approval.add);
rourter.get('/list/paper', pending_approval.list);
rourter.post('/add/score', pending_approval.score);

module.exports = rourter;