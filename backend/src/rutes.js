const {Router}= require('express');
const userModelcontroller= require('./controllers/userModel.controller');
const user= require('../adminMock.json');
const router= Router();

router.get('/',userModelcontroller.getAllUsers);
//router.delete('/:id',userModelcontroller.deleteUser);
router.post('/',userModelcontroller.createUser);

module.exports= router;