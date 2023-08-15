import {Router} from "express"
import adminController from "./admin.controller"

const router:Router = Router()


router.post("/login" , adminController.LOGIN)
router.post("/create/admin" , adminController.CREATE_ADMIN)


export default router;
