import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

export default router;
