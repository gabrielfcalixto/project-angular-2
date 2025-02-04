import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule, // Importa o DashboardModule para acessar o DashboardComponent
    PrimeNGModule,  // Se esse for um módulo compartilhado do PrimeNG, mantenha ele aqui para uso global
    LayoutModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
