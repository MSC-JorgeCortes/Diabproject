import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GraficalComponent } from './components/grafical/grafical.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaCausasComponent } from './components/pagina-causas/pagina-causas.component';
import { PaginaConsecuenciasComponent } from './components/pagina-consecuencias/pagina-consecuencias.component';
import { PaginaGraficasComponent } from './components/pagina-graficas/pagina-graficas.component';
import { PaginaPrevencionComponent } from './components/pagina-prevencion/pagina-prevencion.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaQEComponent } from './components/pagina-qe/pagina-qe.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  {path: '', redirectTo: 'pagina-principal', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registrar-usuario', component: RegistrarUsuarioComponent},
  {path: 'verificar-correo', component: VerificarCorreoComponent},
  {path: 'recuperar-password', component: RecuperarPasswordComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pagina-principal', component: PaginaPrincipalComponent},
  {path: 'pagina-QE', component: PaginaQEComponent},
  {path: 'pagina-causas', component: PaginaCausasComponent},
  {path: 'pagina-consecuencias', component: PaginaConsecuenciasComponent},
  {path: 'pagina-prevencion', component: PaginaPrevencionComponent},
  {path: 'grafical', component: GraficalComponent},
  {path: '**', redirectTo: 'pagina-principal', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
