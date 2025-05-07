import { Appeal } from "../generated/prisma";
import { AppealStatus } from "./StatusEnum";

export interface IUpdateStatuses {
    updateStatusMany(oldStatus: AppealStatus, newStatus: AppealStatus, message: string): Promise<Appeal[]>
}