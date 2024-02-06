const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/pending_approval',
});

const pending_approval = require('../controller/pending_approval');

rourter.post('/add/exam', pending_approval.add);


module.exports = rourter;