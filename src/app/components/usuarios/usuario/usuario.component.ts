import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import * as usuarioActions from '../../../store/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: Usuario;
  loading: boolean;
  error: any;
  id: string;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.id = params.id;
        this.store.dispatch( new usuarioActions.CargarUsuario( this.id ) );
      }
    );
    
    this.loading = true;

    this.store.select('usuario').subscribe(
      usuario => {
        this.user = usuario.user;
        this.loading = usuario.loading;
        this.error = usuario.error;
        
      }
    );
  }

}
