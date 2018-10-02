import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsuarioComponent,
    ListaComponent
  ],
  exports: [
    UsuarioComponent,
    ListaComponent
  ]
})
export class UsuariosModule { }
