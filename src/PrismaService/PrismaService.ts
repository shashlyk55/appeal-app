import { PrismaClient } from "@prisma/client"

class PrismaService {
    private static instance: PrismaService
    public Prisma: PrismaClient

    private constructor(){
        this.Prisma = new PrismaClient()
    }

    public static getInstance(): PrismaService {
        if(!PrismaService.instance) {
            PrismaService.instance = new PrismaService()
        }
        return PrismaService.instance
    }

    async connect(): Promise<void> {
        await this.Prisma.$connect()
    }

    async disconnect(): Promise<void> {
        await this.Prisma.$disconnect()
    }
}

module.exports = PrismaService