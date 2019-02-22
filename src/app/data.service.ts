import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OVERVIEWS } from './mock-overview';
import { Overview } from './overview';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  getOverviews(): Observable<Overview[]> {    
    return of(OVERVIEWS);
  }

  constructor() { }
}
