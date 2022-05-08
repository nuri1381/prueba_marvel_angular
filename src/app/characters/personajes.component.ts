import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
/**
 * se recibe del padre si el listado de comics o characters
 */
  @Input() marvelDTO:any;

  /**
   * se recive del componente padre la lista
   */
  @Input() listarPerson:any = "";
  

  
  constructor() {
   
    
  }


  ngOnInit(): void {

    //this.getComics();


  }
  

}
