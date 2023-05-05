export class Rating {
    id?:number
    idUser: number
    idWork:number
    point: number
    message: string

    constructor(idUser: number, idWork:number,point: number,  message: string ){
       this.idUser = idUser
       this.idWork = idWork
       this.point = point
       this.message = message
    }
}
