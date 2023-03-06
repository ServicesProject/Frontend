export class RegisterLender {

    name: string
    lastName: string
    phone: string
    description: string
    gender:string
    
    constructor(name: string, lastName: string, phone: string, description: string,gender:string){
        this.name = name
        this.lastName = lastName
        this.phone = phone
        this.description = description
        this.gender = gender
    }
}
