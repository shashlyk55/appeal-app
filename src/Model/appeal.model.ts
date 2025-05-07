
class Appeal {
    public constructor(
        public Id: number,
        public Title: string,
        public Content: string,
        public Status: AppealStatus,
        public CreatedAt: Date
    ){}
}

module.exports = Appeal