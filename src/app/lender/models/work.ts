export class Work{
    id?:number
    job: string
    experience: string
    contract: string
    area: string
    address:string
    workTime:string
    category: string
    salary: string
    lat:string
    lng: string

    constructor(job:string, experience: string, contract: string, area: string, address:string,workTime:string, category: string, salary: string, lat:string,lng: string){
           this.job=job
           this.experience=experience
           this.contract=contract
           this.area=area
           this.address=address
           this.workTime=workTime
           this.category = category
           this.salary = salary
           this.lat = lat
           this.lng =lng
    }
}