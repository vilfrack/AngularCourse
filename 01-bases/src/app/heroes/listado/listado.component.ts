import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes: string[]=['Spiderman','Superman','IronMan','Hulk','HomeLander'];
  heroesBorrados: string='';
  borrarHeroe(){
    this.heroesBorrados = this.heroes.pop() || ''
    console.log(this.heroesBorrados)
  }
}
