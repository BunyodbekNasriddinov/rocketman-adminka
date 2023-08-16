import { Router } from "express"
import adminController from "./admin.controller"
import validate from "../../middlewares/validate"
import super_admin_check_token from "../../middlewares/super_admin_check_token"

const router: Router = Router()


router.post("/login", validate, adminController.LOGIN)
router.post("/create/admin", super_admin_check_token, adminController.CREATE_ADMIN)
router.put("/update/admin/:id", super_admin_check_token, validate , adminController.UPDATE_ADMIN)
router.delete("/delete/admin/:id" ,super_admin_check_token , adminController.DELETE)


export default router;
