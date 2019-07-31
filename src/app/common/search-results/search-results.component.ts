import { Component, OnInit, Input} from '@angular/core';
import { Fixture } from 'src/app/models/fixture';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
	@Input() data:any;
	@Input() headerVal:any;
	
	constructor() {
	  
	  console.log(this.data, this.headerVal)
	}

  ngOnInit() {
	
  }
	

}
