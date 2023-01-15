import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home';
import { GestionAdminComponent } from './component/gestion-admin/gestion-admin.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { AjoutAdminComponent } from './component/ajout-admin/ajout-admin.component';
import { AjoutCentreComponent } from './component/ajout-centre/ajout-centre.component';
import { CentresComponent } from './component/centres';
import { LoginComponent } from './component/login/login.component';
import { PlaningComponent } from './component/planing/planing.component';
import { AjoutDoctorComponent } from './component/ajout-doctor';
import { WaitingComponent } from './component/waiting/waiting.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'gestion-admin', component: GestionAdminComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'addadmin/:id', component: AjoutAdminComponent},
  {path: 'addadmin', component: AjoutAdminComponent},
  {path: 'addcentre', component: AjoutCentreComponent},
  {path: 'adddoc', component: AjoutDoctorComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'centre', component: CentresComponent},
  {path: 'login', component: LoginComponent},
  {path: 'planning', component: PlaningComponent},
  {path: 'waiting/:temps', component: WaitingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
