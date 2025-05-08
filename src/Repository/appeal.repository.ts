import { Appeal } from '../generated/prisma'
import { prismaService } from '../PrismaService/PrismaService' 
import { IRepository } from '../Types/IRepository'
import { IUpdateStatuses } from '../Types/IUpdateStatuses'
import { AppealStatus } from '../Types/StatusEnum'

export class AppealRepository implements IRepository<Appeal>, IUpdateStatuses {
    async add(data: Appeal): Promise<Appeal> {
        return await prismaService.prisma.appeal.create({
            data, 
        })
    }
    async update(id: number, data: Partial<Appeal>): Promise<Appeal> {
        return await prismaService.prisma.appeal.update({
            where: { id },
            data,
        })
    }
    async getOne(id: number): Promise<Appeal | null> {
        return await prismaService.prisma.appeal.findUnique({
            where: { id },
        })
    }
    async getAll(): Promise<Appeal[]>{
        return await prismaService.prisma.appeal.findMany()
    }
    async delete(id: number): Promise<Appeal> {
        return await prismaService.prisma.appeal.delete({
            where: { id },
        })
    }
    async updateStatusMany(oldStatus: AppealStatus, newStatus: AppealStatus, message: string): Promise<Appeal[]> {
        return await prismaService.prisma.appeal.updateManyAndReturn({
            where: {
                status: oldStatus
            },
            data: {
                status: newStatus,
                message: message
            }
        })
    }
    
}
