import {Request, Response, Router} from "express";

const router = Router();

router
    .get('/', (req: Request, res: Response) =>{
    res.send('Hello!');
    })
    .get('/:id', (req: Request, res:Response) =>{
        res.send(`Hello @ ${req.params.id}`);
    });

export default router;