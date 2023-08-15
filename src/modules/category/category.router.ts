import { Router } from "express"
import categoryController from "./category.controller"
import check_token from "../../middlewares/check_token";
import validate from "../../middlewares/validate";

const router: Router = Router()

router.get("/category", check_token, categoryController.GET)
router.post("/category", check_token, validate, categoryController.CREATE_CATEGORY)
router.put("/category/:id", check_token, categoryController.UPDATE_CATEGORY)
router.delete("/category/:id", check_token, categoryController.DELETE_CATEGORY)

export default router;
