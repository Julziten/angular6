import { Component, OnInit } from '@angular/core'; // this is always imported from the angular core library
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({ // the CLI generates three metadata properties
  selector: 'app-countries', // the component's CSS element selector - The CSS element selector, 'app-***', matches the name of the HTML element that identifies this component within a parent component's template.
  templateUrl: './countries.component.html', // the location of the component's template file.
  styleUrls: ['./countries.component.css'] // the location of the component's private CSS styles.
}) // decorator function


export class CountriesComponent implements OnInit { // Always export the component class so you can import it elsewhere ... like in the AppModule.

  countries: Country[];
  
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  } // this is a lifecycle hook, Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.


  getCountries(): void {
    this.countryService.getCountries()
    .subscribe(countries => this.countries = countries);
  }

  

}
