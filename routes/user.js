const Router = require('koa-router');
var router = new Router({
    prefix:'/api/user'
});


const user = require('../controller/user');


router.post('/password/update',user.updatePassword);


module.exports = router;