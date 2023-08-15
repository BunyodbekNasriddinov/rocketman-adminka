import { Router } from "express"

import adminRouter from "./admin/admin.router"
import categoryRouter from "./category/category.router"
import subCategoryRouter from "./subCategory/subCategory.router"
import productRouter from "./product/product.router"
import subProductRouter from "./subProduct/subProduct.router"
import driverRouter from "./driver/driver.router"
import orderRouter from "./order/order.router"


const router:Router = Router()




router.use(adminRouter)
router.use(categoryRouter)
router.use(subCategoryRouter)
router.use(productRouter)
router.use(subProductRouter)
router.use(driverRouter)
router.use(orderRouter)



export default router