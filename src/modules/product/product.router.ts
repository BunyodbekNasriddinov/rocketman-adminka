import { Router } from "express"
import productController from "./product.controller"
import check_token from "../../middlewares/check_token"
const router: Router = Router()


router.post("/create/product", check_token, productController.CREATE_PRODUCT)
router.put("/update/product/:id", check_token, productController.UPDATE_PRODUCT)
router.get("/product/:id", check_token, productController.BYID_PRODUCT)
router.get("/products", check_token, productController.GET_ALL)

export default router;
