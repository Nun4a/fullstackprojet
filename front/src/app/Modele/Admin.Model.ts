import { Center } from "./Center.Model";

export class Admin {

    constructor(
        public id:number,
        public firstName:string,
        public lastName:string,
        public mail:string,
        public phoneNumber:string,
        public center:Center
    ) {}


}