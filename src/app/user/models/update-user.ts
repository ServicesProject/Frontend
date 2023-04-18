export class UpdateUser {
    id?:number
    name: string
    lastName: string
    phone: string
    gender:string
    ci:string
    birthdate: Date
    
    

    constructor(name:string, lastName: string, phone: string, gender:string, ci:string, birthdate: Date){
        this.name = name
        this.lastName = lastName
        this.phone = phone
        this.gender = gender
        this.ci = ci
        this.birthdate = birthdate
    }
}
