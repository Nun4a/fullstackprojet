import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
