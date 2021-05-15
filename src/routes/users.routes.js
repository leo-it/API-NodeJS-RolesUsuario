import {Router} from 'express'
import { verify } from 'jsonwebtoken'
import * as userCtrl from '../controllers/user.controller'
import {authJwt, veryfySignup} from '../midlewares'
const router = Router()

router.post('/',[
    authJwt.verifyToken,
    authJwt.isAdmin,
    veryfySignup.checkRolesExisted
],
 userCtrl.createUser)


export default router