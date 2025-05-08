import { AppealService } from "../Service/appeal.service";
import { Request, Response } from "express";

export class AppealController {

    private readonly appealService: AppealService = new AppealService()
    
    public getAll = async(req: Request, res: Response) => {
        const appeals = await this.appealService.getAllAppeals()
        return res.status(200).json({
            data: appeals
        })
    }
    public add = async (req: Request, res: Response) => {
        const { appeal } = req.body
        const newAppeal = await this.appealService.addAppeal(appeal)
        return res.status(200).json({
            data: newAppeal
        })
    }
    public processAppeal = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const newAppeal = await this.appealService.processAppeal(id)
        return res.status(200).json({
            data: newAppeal
        })
    }
    public cancelAppeal = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const { message } = req.body
        const newAppeal = await this.appealService.cancelAppeal(id, message)
        return res.status(200).json({
            data: newAppeal
        })
    }
    public finishAppeal = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const { message } = req.body
        const newAppeal = await this.appealService.finishAppeal(id, message)
        return res.status(200).json({
            data: newAppeal
        })
    }
    public cancelAllProcessAppeals = async (req: Request, res: Response) => {
        const { message } = req.body
        const updatedAppeals = await this.appealService.cancelAllProcessedAppeals(message)
        return res.status(200).json({
            data: updatedAppeals
        })
    }
}