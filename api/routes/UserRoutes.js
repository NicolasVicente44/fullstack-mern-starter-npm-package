const express = require('express');
const passport = require('passport');
const userController = require('../controllers/UserController');
const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
