export class RegisterLender {

    name: string
    lastName: string
    phone: string
    description: string
    gender:string
    ci:string
    birthdate: Date;

    
    constructor(name: string, lastName: string, phone: string, description: string,gender:string, ci:string, birthdate: Date){
        this.name = name
        this.lastName = lastName
        this.phone = phone
        this.description = description
        this.gender = gender
        this.ci = ci
        this.birthdate =birthdate
    }
}
