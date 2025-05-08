import { Filter } from "./Filter"


export interface IRepository<T> {
    add(data: T): Promise<T>
    update(id: number, data: Partial<T>): Promise<T>
    delete(id: number): Promise<T>
    getOne(id: number): Promise<T | null>
    getAll(filters?: Filter): Promise<T[]>
}
