import { Injectable }		from '@angular/core';
import { Http, Response }	from '@angular/http';
import { Observable }		from 'rxjs';

import { Hero }				from './hero';

@Injectable()
export class HeroSearchService {
	constructor(private http: Http) {}

	findHeroes = (searchString: string): Observable<Hero[]> => {
        return this.http
					.get('app/heroes/?name=' + searchString)
					.map((r: Response) => r.json().data as Hero[]);
	}
}