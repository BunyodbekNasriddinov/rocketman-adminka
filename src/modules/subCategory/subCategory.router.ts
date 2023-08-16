import { Router } from "express"
import subCategoryController from "./subCategory.controller"
import check_token from "../../middlewares/check_token"
const router: Router = Router()

router.post("/subcategory", check_token, subCategoryController.CREATE_SUB_CATEGORY)
router.put("/subcategory/:id", check_token, subCategoryController.UPDATE_SUB_CATEGORY)
router.get("/subcategory/:id", check_token, subCategoryController.BYID_SUB_CATEGORY)
router.get("/subcategory", check_token, subCategoryController.GET_ALL)

export default router;
