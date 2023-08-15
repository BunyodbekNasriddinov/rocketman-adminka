import { Router } from "express"
import driverController from "./driver.controller"
import check_token from "../../middlewares/check_token";
const router: Router = Router()

router.post("/create/driver", check_token, driverController.CREATE_DRIVER)
router.put("/update/driver/:id", check_token, driverController.UPDATE_DRIVER)
router.delete("/delete/driver/:id", check_token, driverController.DELETE_DRIVER)


export default router;
