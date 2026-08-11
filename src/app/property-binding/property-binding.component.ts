import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  texto =  'texto do input';

  inputType = 'password';
  inputDisabled= true;


  onInputChange(event: Event){
    const value = (event.target as HTMLInputElement).value;

    this.texto = value;
  }
}
