import {Component} from '@angular/core';
import {ProgressBarComponent} from './components/style-binding/progress-bar/progress-bar.component';
import {SquarePopupComponent} from './components/style-binding/square-popup/square-popup.component';

@Component({
  selector: 'app-root',
  imports: [ProgressBarComponent, SquarePopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
