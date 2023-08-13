import { Router } from "express"
import adminRouter from "./admin/router"
import categoryRouter from "./admin/router"
import subCategoryRouter from "./admin/router"
import driverRouter from "./admin/router"
import orderRouter from "./admin/router"
import productRouter from "./admin/router"
import subProductRouter from "./admin/router"

const router = Router()

router.use(adminRouter)
router.use(categoryRouter)
router.use(subCategoryRouter)
router.use(driverRouter)
router.use(orderRouter)
router.use(productRouter)
router.use(subProductRouter)

export default router
