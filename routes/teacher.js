const Router = require('koa-router');
var rourter = new Router({
    prefix:'/api/teacher',
});

const teacher = require('../controller/teacher');


rourter.post('/studentManagement/add',teacher.addStudent);
rourter.get('/studentManagement/list',teacher.studentList);
rourter.post('/studentManagement/delete',teacher.deleteStudent)
rourter.post('/studentManagement/edit',teacher.editStudent)


rourter.post('/teacherManagement/add',teacher.addTeacher);
rourter.get('/teacherManagement/list',teacher.teacherList);
rourter.post('/teacherManagement/delete',teacher.deleteTeacher)
rourter.post('/teacherManagement/edit',teacher.editTeacher)




module.exports = rourter;