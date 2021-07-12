import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes:string[]=['Capitan','Spiderman','Iroman','Hulk','Thor'];
    heroeEliminado:string='';
    
    borrarHeroe() {
      this.heroeEliminado=this.heroes.shift() || '';

    }
}
