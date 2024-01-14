const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/teacher'
});

const teacher = require('../controller/teacher');

rourter.post('/addQuesion/singleChoice',teacher.addSingleChoiceQuestion);


module.exports = rourter;