import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SuperHero } from '../models/super-hero';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  
 private url = "SuperHero";

  constructor(private http : HttpClient) { }

  // get superHero array when we use only angular 
/*public getsuperHeroes(): SuperHero[]
{
 let hero = new SuperHero();
    hero.id = 1;
    hero.name = "test";
    hero.firstname = "fname";
    hero.lastname = "lname";
    hero.place = "place";


  return [hero];


}*/


// get superHero array from an api url

  public getSuperHeroes() : Observable <SuperHero[]>
  {
    
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
   
  }

  public createHero(hero : SuperHero) : Observable <SuperHero[]>
  {
    
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
       hero);
   
  }

  public updateHero(hero : SuperHero) : Observable <SuperHero[]>
  {
    
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
       hero);
   
  }

  public deleteHero(hero : SuperHero) : Observable <SuperHero[]>
  {
    
    return this.http.delete<SuperHero[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`);
   
  }
}
