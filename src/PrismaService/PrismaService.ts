import { PrismaClient } from "../generated/prisma"

class PrismaService {
    private static instance: PrismaService
    public prisma: PrismaClient

    private constructor(){
        this.prisma = new PrismaClient()
    }

    public static getInstance(): PrismaService {
        if(!PrismaService.instance) {
            PrismaService.instance = new PrismaService()
        }
        return PrismaService.instance
    }

    async connect(): Promise<void> {
        await this.prisma.$connect()
    }

    async disconnect(): Promise<void> {
        await this.prisma.$disconnect()
    }
}

export const prismaService = PrismaService.getInstance();
