import {Component} from '@angular/core';
import {ProgressBarComponent} from './components/style-binding/progress-bar/progress-bar.component';

@Component({
  selector: 'app-root',
  imports: [ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
