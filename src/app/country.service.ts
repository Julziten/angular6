import { Injectable } from '@angular/core';
import { Country } from './country';
import { COUNTRIES } from './mock-countries';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  constructor(private messageService: MessageService) { }

  getCountries(): Observable<Country[]> {
    // TODO: send the message after fetching the heores
    this.messageService.add('MessageService: fetched countries');
    return of(COUNTRIES);
  }

  getCountry(id: number): Observable<Country> {
    this.messageService.add(`CountryService: fetched country id=${id}`);
    return of(COUNTRIES.find(country => country.id === id));
  }
  
}

