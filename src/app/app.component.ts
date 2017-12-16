import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { ServicesService } from './services/index';
 
@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private messageService: ServicesService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => console.log(message));
  }
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
