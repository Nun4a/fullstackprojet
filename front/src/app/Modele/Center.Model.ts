import { Address } from "./Address.Model";

export interface Center {

    id:number,
    name:string,
    timetable: string,
    capacity:number,
    address:Address
    
}