import {Router, Request, Response} from "express";
import usersRoutes from "./users.routes";
import homeRoutes from "./home.routes";

const router = Router();

router.use('/', homeRoutes);
router.use('/users', usersRoutes);

export default router;