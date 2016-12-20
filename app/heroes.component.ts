import {
  Component,
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { Router }				from '@angular/router';
import { Hero } 		 		from './hero';
import { HeroService }			from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})

export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
  	this.getHeroes();
  };
  
  constructor(
  	private heroService: HeroService,
  	private router: Router
  ) { 

  };
  
  gotoDetail(): void {
  	this.router.navigate(['detail',this.selectedHero.id]);
  };
  
  getHeroes(): void {
  	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };

  onSelect(hero: Hero): void {
    if( this.selectedHero && this.selectedHero !== hero ) {
      this.selectedHero.state = 'inactive';
    }
    hero.state = (hero.state === 'active' ? 'inactive' : 'active');
    if( hero.state === 'inactive' ) {
      this.selectedHero = null;
    } else {
      this.selectedHero = hero;
    }
  };

  add(name: string): void {
    name = name.trim();
    if (!name) { 
      return; 
    }
    this.heroService
        .create(name)
        .then(hero => {
            this.heroes.push(hero);
            if( this.selectedHero ) {
               this.selectedHero.state = 'inactive';
               this.selectedHero = null;
            }       
        });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
};

