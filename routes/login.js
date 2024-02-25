const Router = require('koa-router');
var router = new Router({
    prefix:'/api/login'
});


const login = require('../controller/login');


router.post('/login', login.userLogin);


module.exports = router;