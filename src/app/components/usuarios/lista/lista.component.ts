import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Usuario } from '../../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import * as usuariosActions from '../../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[];
  loading: boolean;
  error: any;

  constructor(
                private store: Store<AppState>,
                private spiner: NgxSpinnerService
              ) { }

  ngOnInit() {

    this.loading = true;

    this.store.dispatch( new usuariosActions.CargarUsuarios() );
  
    this.store.select('usuarios').subscribe(
      usuarios => {
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
        
      }
    );
  }

  



}
