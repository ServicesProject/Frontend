export class Notification{
    message: string
    state: string
    userId:number
    lenderEmail: string
    workId: number
    
    

    constructor(userId:number, workId: number, lenderEmail: string, state: string, message: string){
        this.message = message
        this.state = state
        this.userId = userId
        this.lenderEmail = lenderEmail
        this.workId = workId
    }
}