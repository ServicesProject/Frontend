export class FilterWorks{
    
    experience: string
    contract: string
    area: string
    workTime:string
    category: string


    constructor(experience: string, contract: string, area: string, workTime:string, category: string){
           this.experience=experience
           this.contract=contract
           this.area=area
           this.workTime=workTime
           this.category = category
    }
}