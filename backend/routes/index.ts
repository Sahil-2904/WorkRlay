import {Router, Request, Response} from "express";
import usersRoutes from "./worker.route";
import homeRoutes from "./home.route";

const router = Router();

router.use('/', homeRoutes);
router.use('/workers', usersRoutes);

export default router;