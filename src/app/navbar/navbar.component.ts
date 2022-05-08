import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from '../marvel-service.service';
import { Observable } from 'rxjs';
import { MarvelModel } from '../models/marvel-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public ocultar: boolean;
  public ocultarSubmenu: string = "";
  public column: number = 10;
  public nombrePersonajes: string = "Lista de Personajes";
  public nombreComics: string = "Lista de comics";
  public nombreListado: string = this.nombrePersonajes;
  public nombreUsuario: string = "  Sánchez Rodríguez Nuri del Pilar";
  public nombreOperatoria: string = "2";
  public marvelDTO: Observable<MarvelModel>;

  constructor(private _serviceRestService: MarvelServiceService) {
    this.ocultar = false;
    this.marvelDTO = new Observable<MarvelModel>();
  }

  ngOnInit(): void {
    // se presenta el listado de personajes por defecto
    this.listado('p');
  }

  /**
   * 
   * @param stiloSubmenu ocultamos el menu lateral si se hace click
   */

  esconder(stiloSubmenu: string) {
    this.ocultarSubmenu = stiloSubmenu;
    if (stiloSubmenu == "none") {
      this.column = 12;
    } else {
      this.column = 10;
    }
    this.ocultar = !this.ocultar

  }

  /**
   * 
   * @param nombre dependiendo si es de comics o characters se llama la funcion que baja lso personajs
   */

  listado(nombre: string) {
    this.nombreListado = nombre;
    if (nombre == "p") {
      this.nombreListado = "Lista de Personajes";
      this.nombreOperatoria = "2";
      this.getPersonajes();
    } else {
      this.getComics();
      this.nombreOperatoria = "1";
      this.nombreListado = "Lista de Comics";
    }
  }

  /**
   * listado de personajes de la api de Marvel
   */
  getPersonajes() {
    this._serviceRestService.getlistadoPersonajes().subscribe((data: any) => {
      this._serviceRestService.trasformToDTOCharacters(data).subscribe((dataDto:any) =>{
      this.marvelDTO = dataDto;
      console.log(this.marvelDTO);
      })
    });
  }

  /**
   * 
   * @param personajes 
   * listado de comics de la api de Marvel
   */
  getComics() {
    this._serviceRestService.getListadoComics().subscribe((data: any) => {
      this._serviceRestService.trasformToDTOComics(data).subscribe((dataDto:any) =>{
        this.marvelDTO = dataDto;
        console.log(this.marvelDTO);
        })
    });
  }


}


