import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService} from '../hero.service';

@Component({   //@Component is decorator that specifies angular metadata for component
  selector: 'app-heroes',       //component's css element selector
  templateUrl: './heroes.component.html',  //location of component's template file
  styleUrls: ['./heroes.component.css']   //location of component's private css file
})
export class HeroesComponent implements OnInit {
  
  //heroes = HEROES;  //since not importing HEROES from mock-heroes
  heroes : Hero[];       //so we use it from hero.service
  // selectedHero : Hero;
  
  //Add a private heroService parameter of type HeroService to the constructor.
  constructor(private heroService: HeroService) { }

  //Angular calls ngOnInit shortly after creating a component
  ngOnInit() {
    this.getHeroes();
  }
  // onSelect(hero:Hero):void{
  //   this.selectedHero = hero;
  // }
  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  } 
}


