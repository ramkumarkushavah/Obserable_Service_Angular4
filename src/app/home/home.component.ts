import { Component} from '@angular/core';
import { ServicesService } from '../services/index';

@Component({
 // moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private messageService: ServicesService) {}
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
}

clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
}
  

}
