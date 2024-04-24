import log from "../logger/log";
import { Request, Response } from "express";
import { createWorker } from "../services/worker.service";
import { omit } from "lodash";

export async function createWorkerHandler(req: Request, res: Response) {
    try {
        const worker = await createWorker(req.body);
        if (!worker) {
            return res.status(404).send("Worker not found");
        }
        return res.send(omit(worker.toJSON(), "password"));
    } catch (error) {
        log.error(error);
        return res.status(409).send(error);
    }
}
