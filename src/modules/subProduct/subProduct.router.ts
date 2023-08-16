import {Router} from "express"
import check_token from "../../middlewares/check_token";
import subProductController from "./subProduct.controller";
const router:Router = Router()


router.get("/sub_product" , check_token , subProductController.GET_ALL)
router.post("/create/sub_product" , check_token , subProductController.CREATE_SUB_PRODUCT)

export default router;
