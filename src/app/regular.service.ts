import { Injectable } from '@angular/core';
import{Pro}from'./pro';
import{TEST} from'./mock-test';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegularService {
 

  constructor() { }

getTest():Observable<Pro[]>{
return of (TEST);
}
}