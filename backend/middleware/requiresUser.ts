import { get } from "lodash";
import { Request,Response, NextFunction } from "express";
import log from "../logger/log";
async function requiresUser(req: Request, res: Response, next: NextFunction){
    const user = get(req, "user");
    if(!user){
        return res.sendStatus(403);
    }

    return next();
}

export default requiresUser;