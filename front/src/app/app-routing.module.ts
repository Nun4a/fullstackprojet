import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home';
import { GestionAdminComponent } from './component/gestion-admin/gestion-admin.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { AjoutAdminComponent } from './component/ajout-admin/ajout-admin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'gestion-admin', component: GestionAdminComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'addChangeAdmin', component: AjoutAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
