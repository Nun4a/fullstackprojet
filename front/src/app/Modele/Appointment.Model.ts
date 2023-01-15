import { Utilisateur } from "./Utilisateur"

export interface Appointment {
    id: number
    day: string
    centerId: number
    doctorId:number
    utilisateur : Utilisateur
}