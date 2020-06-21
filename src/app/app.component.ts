import { Component } from '@angular/core';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ValidationService]
})

export class AppComponent {
  title = 'dashboard';
}
