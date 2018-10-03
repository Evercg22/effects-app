import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducers } from './store/app.reducer';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Spinner
import { NgxSpinnerModule } from 'ngx-spinner';

// Modulos personalizados
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { UsuariosModule } from './components/usuarios/usuarios.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot( effectsArr ),
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
