import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import TODOModel from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodo(id: number): Observable<TODOModel>{
    console.log('id', id);
    return of({ id: 1, name: 'first List' });
  }
}
