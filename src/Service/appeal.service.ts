import { Appeal } from "../generated/prisma";
import { IUpdateStatuses } from "../Types/IUpdateStatuses";
import { AppealStatus } from "../Types/StatusEnum";


export class AppealService {
    constructor(
        private repository: IRepository<Appeal>,
        private additionalRepository?: IUpdateStatuses
    ){}

    async getAllAppeals(){
        try{
            return await this.repository.getAll()
        } catch (err){
            console.error(err);
            throw new AppError(500, `server error`)
        }
    }
    async getOneAppeal(id: number){
        try{
            const appeal = await this.repository.getOne(id)
            if(!appeal){
                throw new AppError(404, 'not found')
            }
            return appeal
        } catch (err){
            console.error(err);
            throw new AppError(500, `server error`)
        }
    }
    async addAppeal(appeal: Appeal){
        try{
            appeal.status = AppealStatus.new
            const newAppeal = await this.repository.add(appeal)
            return newAppeal
        } catch (err){
            console.error(err);
            throw new AppError(500, `server error`)
        }
    }
    async processAppeal(id: number){
        try{
            const appeal = await this.repository.getOne(id)
            if(!appeal){
                throw new AppError(404, 'not found')
            }
            appeal.status = AppealStatus.new
            const newAppeal = await this.repository.update(id, appeal)
            return newAppeal
        } catch (err){
            console.error(err);
            throw new AppError(500, `server error`)
        }
    }
    async finishAppeal(id: number, message: string){
        try{
            const appeal = await this.repository.getOne(id)
            if(!appeal){
                throw new AppError(404, 'not found')
            }
            appeal.status = AppealStatus.finish
            appeal.message = message
            const updatedAppeal = await this.repository.update(id, appeal)
            return updatedAppeal
        } catch (err){
            console.error(err);
            throw new AppError(500, `server error`)
        }
    }
    async cancelAppeal(id: number, message: string){
        try{
            const appeal = await this.repository.getOne(id)
            if(!appeal){
                throw new AppError(404, 'not found')
            }
            appeal.status = AppealStatus.cancel
            appeal.message = message
            const updatedAppeal = await this.repository.update(id, appeal)
            return updatedAppeal
        } catch (err){
            console.error(err);
            throw new AppError(500, `server error`)
        }
    }
    async cancelAllProcessedAppeals(message: string){
        try{
            const updatedAppeals = await this.additionalRepository?.updateStatusMany(AppealStatus.process, AppealStatus.cancel, message)
            return updatedAppeals
        } catch (err){
            console.error(err);
            throw new AppError(500, `server error`)
        }
    }
}