export class Work{
    id?:number
    job: string
    experience: string
    contract: string
    area: string
    address:string
    workTime:string

    constructor(job:string, experience: string, contract: string, area: string, address:string,workTime:string){
           this.job=job
           this.experience=experience
           this.contract=contract
           this.area=area
           this.address=address
           this.workTime=workTime
    }
}