import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaQEComponent } from './components/pagina-qe/pagina-qe.component';
import { PaginaCausasComponent } from './components/pagina-causas/pagina-causas.component';
import { PaginaConsecuenciasComponent } from './components/pagina-consecuencias/pagina-consecuencias.component';
import { PaginaPrevencionComponent } from './components/pagina-prevencion/pagina-prevencion.component';
import { PaginaGraficasComponent } from './components/pagina-graficas/pagina-graficas.component';
import { FormsModule } from '@angular/forms';
import { GraficalComponent } from './components/grafical/grafical.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    PaginaPrincipalComponent,
    PaginaQEComponent,
    PaginaCausasComponent,
    PaginaConsecuenciasComponent,
    PaginaPrevencionComponent,
    PaginaGraficasComponent,
    GraficalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
