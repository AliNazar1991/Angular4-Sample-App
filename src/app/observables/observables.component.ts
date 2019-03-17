import { Component, OnInit, Pipe } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { map, take } from 'rxjs/operators';
import { pipeDef } from '../../../node_modules/@angular/core/src/view';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { jsonpFactory } from '../../../node_modules/@angular/http/src/http_module';
import { Body } from '../../../node_modules/@angular/http/src/body';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  public result$: Observable<any>;

  constructor(private http: Http) { }

  ngOnInit() {

    /**
     * this uses pipeable operators with async pipe, async pipe unsubscribes automatically.
     */
    this.result$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .pipe(
      map(response => {
        return response;
      })
    );
    
  }

}
