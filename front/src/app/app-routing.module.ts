import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login';
import { HomeComponent } from './home';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'gestion-admin', component: GestionAdminComponent},
  {path: 'addadmin', component: AjoutAdminComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'connexion', component: ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
