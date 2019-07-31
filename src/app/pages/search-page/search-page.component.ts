import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Fixture } from 'src/app/models/fixture';
import { Observable } from 'rxjs';
import { FixturesService } from 'src/app/services/fixtures.service';
import { FormControl } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  loader:boolean= false;
  searchResults$: Observable<Fixture[]>;

  searchField = new FormControl(['']);

  displayedColumns: string[] = ['fixtureName', 'kickoff', 'venue'];

  constructor(private fixturesService: FixturesService) {}

  ngOnInit() {}
  
  search(){
	this.loader= true;
	this.searchResults$ = this.fixturesService.getFixtures(this.searchField.value).pipe( tap(
		val => {
		this.loader= false;		
	}))	
  }

}
