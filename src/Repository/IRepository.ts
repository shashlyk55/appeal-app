

interface IRepository<T> {
    add(obj: T): T
    edit(id: number, obj: T): T
    getOne(id: number): T
    getAll(): T[]
}
