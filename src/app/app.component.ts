import {Component} from '@angular/core';
import {MeuBotaoComponent} from './meu-botao/meu-botao.component';
import {ButtonFlatComponent} from './button-flat/button-flat.component';
import {EventBindingComponent} from './event-binding/event-binding.component';

@Component({
  selector: 'app-root',
  imports: [MeuBotaoComponent, ButtonFlatComponent, EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
