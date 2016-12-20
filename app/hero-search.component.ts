import { Component, OnInit }	from '@angular/core';
import { Router }				from '@angular/router';
import { Observable }			from 'rxjs/Observable';
import { Subject }				from 'rxjs/Subject';

import { HeroSearchService }	from './hero-search.service';
import { Hero }					from './hero';

@Component({
	moduleId: module.id,
	selector: 'hero-search',
	templateUrl: 'hero-search.component.html',
	providers: [ HeroSearchService ]
})

export class HeroSearchComponent {
	
	constructor(private heroSearchService: HeroSearchService, 
				private router: Router) {
	}

	gotoDetail(hero:Hero): void {	
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}

