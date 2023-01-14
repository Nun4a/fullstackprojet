import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home';
import { GestionAdminComponent } from './component/gestion-admin/gestion-admin.component';
import { AdminService, DoctorService } from 'src/app/service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionComponent } from './component/connexion/connexion.component'
import { SuperAdminService } from 'src/app/service';
import { AjoutAdminComponent } from './component/ajout-admin/ajout-admin.component';
import { AjoutCentreComponent } from './component/ajout-centre/ajout-centre.component';
import { CentreService } from 'src/app/service';
import { AddressService } from 'src/app/service';
import { MaterialModule } from './material.module';
import { CentresComponent } from './component/centres/centres.component';
import { FormEditComponent } from './component/form-edit/form-edit.component';
import { MenuComponent } from './component/menu/menu.component';
import { DatagridComponent } from './component/datagrid/datagrid.component';
import { FormCenterComponent } from './component/form-center';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { PlaningComponent } from './component/planing/planing.component';
import { AjoutDoctorComponent } from './component/ajout-doctor';

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
    AjoutDoctorComponent,
    DatagridComponent,
    AjoutCentreComponent,
    FormCenterComponent,
    PlaningComponent
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
  providers: [AdminService, SuperAdminService, CentreService, AddressService,DoctorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
