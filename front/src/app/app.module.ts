import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home';
import { GestionAdminComponent } from './component/gestion-admin/gestion-admin.component';
import { AdminService } from './admin.service';
import { HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './component/connexion/connexion.component'
import { SuperAdminService } from './super-admin.service';
import { AjoutAdminComponent } from './component/ajout-admin/ajout-admin.component';
import { MaterialModule } from './material.module';
import { CentresComponent } from './component/centres/centres.component';
import { FormEditComponent } from './component/form-edit/form-edit.component';
import { MenuComponent } from './component/menu/menu.component';
import { DatagridComponent } from './component/datagrid/datagrid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FormEditComponent,
    CentresComponent,
    GestionAdminComponent,
    ConnexionComponent,
    AjoutAdminComponent,
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule, // Lib pour bar de recherche dans une liste
    MaterialModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [AdminService, SuperAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
