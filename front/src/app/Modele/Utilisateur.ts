import { Center } from "./Center.Model";

export interface Utilisateur {
  id:number;
  firstName: string;
  lastName:string;
  password:string;
  mail:string;
  role:string;
  center:Center
}
