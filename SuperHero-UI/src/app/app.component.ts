import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero-UI';
  heroes : SuperHero [] = [];
  heroToEdit? : SuperHero;

  constructor(private superHeroservide :SuperHeroService){}
/*
// get heros and log them on the console 
  ngOnInit() :void {
    this.heroes = this.superHeroservide.getSuperHeroes();
    console.log(this.heroes);
  }*/

  ngOnInit() :void {
   this.superHeroservide
   .getSuperHeroes()
   .subscribe((result :SuperHero[]) => (this.heroes = result));
 
  }

  updateHeroList(heroes :SuperHero[])
  {
    this.heroes = heroes;
  }

  initNewHero()
  {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero :SuperHero)
  {
    this.heroToEdit = hero ;
  }

}
