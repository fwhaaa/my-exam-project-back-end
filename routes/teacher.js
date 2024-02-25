const Router = require('koa-router');
var router = new Router({
    prefix:'/api/teacher',
});

const teacher = require('../controller/teacher');


router.post('/studentManagement/add',teacher.addStudent);
router.get('/studentManagement/list',teacher.studentList);
router.post('/studentManagement/delete',teacher.deleteStudent)
router.post('/studentManagement/edit',teacher.editStudent)


router.post('/teacherManagement/add',teacher.addTeacher);
router.get('/teacherManagement/list',teacher.teacherList);
router.post('/teacherManagement/delete',teacher.deleteTeacher)
router.post('/teacherManagement/edit',teacher.editTeacher)




module.exports = router;