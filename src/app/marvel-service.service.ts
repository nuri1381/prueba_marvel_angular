import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {
  PUBLIC_KEY = "809fa665718b6a0b765e9c4589701d56";
  HASH = "2e01940c39ceaa249200c98d8ba1a9fd";
  URL_API_PERSO = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  URL_API_COMICS = `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  private servidorPersonajes: string = "/api/marvel/characters";
  private servidorComics: string ="/api/marvel/comics";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),

  }
  constructor(private http: HttpClient) { }
/**
 * 
 * @returns lista de personajes de la api de marvel
 */
  /*getlistadoPersonajes(): Observable<any> {
    return this.http.get<any>(this.URL_API_PERSO).pipe(map((data: any) => {
      return data.data.results;
    }));
  }*/
/**
 * 
 * @returns lista de comics de la api de marvel
 */
  /*getListadoComics(): Observable<any> {
    return this.http.get<any>(this.URL_API_COMICS).pipe(map((data: any) =>{
        return  data.data.results;
    }));
  }*/
  /**
   * 
   * @param data enviamos la lista de personajes a mapear al servidor
   * @returns recibimos la lista de lso personajes mapeada
   */

  trasformToDTOCharacters(): Observable<any> {
    return this.http.post(this.servidorPersonajes, null);
     
  }
/**
 * 
 * @param data de los comics a mapear
 * @returns lista de comics mapeados
 */
  trasformToDTOComics(): Observable<any> {
    return this.http.post(this.servidorComics, null);
     
  }


}
