import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({   //@Component is decorator that specifies angular metadata for component
  selector: 'app-heroes',       //component's css element selector
  templateUrl: './heroes.component.html',  //location of component's template file
  styleUrls: ['./heroes.component.css']   //location of component's private css file
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id:1,
    name:'WindStorm'
  }

  constructor() { }

  //Angular calls ngOnInit shortly after creating a component
  ngOnInit() { 
  }
  heroes = HEROES;
  //hero ="WindStorm";
  
  //onclick property in list of heroes using typescript
  selectedHero : Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

}
