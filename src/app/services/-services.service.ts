import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import * as Rx from 'rxjs'
@Injectable()
export class ServicesService {

  constructor() { }

  private subject = new Subject<any>();
  
      sendMessage(message: string) {
          this.subject.next({ text: message });
      }
  
      clearMessage() {
          this.subject.next();

          //this part of method is not application...this is for test some method
          var source = Rx.Observable.from([1, 2, 3]);
          var subject = new Rx.Subject();
          var multicasted = source.multicast(subject);
          
          // These are, under the hood, `subject.subscribe({...})`:
          multicasted.subscribe({
            next: (v) => console.log('observerA: ' + v)
          });
          multicasted.subscribe({
            next: (v) => console.log('observerB: ' + v)
          });
          
          // This is, under the hood, `source.subscribe(subject)`:
          multicasted.connect();
      }
  
      getMessage(): Observable<any> {
          return this.subject.asObservable();
      }
      
      
      
}
