import {Router} from 'express'
import {veryfySignup} from '../midlewares'
const router = Router()

import * as authCtrl from '../controllers/auth.controller'

router.post('/signup',[veryfySignup.checkDuplicateUsernameOrEmail, veryfySignup.checkRolesExisted], authCtrl.signUp)
router.post('/signin', authCtrl.signin)



export default router