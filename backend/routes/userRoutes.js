import { Router } from 'express';
import { signUpController } from '../controller/singupController.js';
import { signinController } from '../controller/signinController.js';


const router = Router();

router.post('/signup', signUpController)
router.post('/signin', signinController)

export default router;