import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEventComponent {
  productName: string='';
  onSave(): void {
    console.log ('Saving product:', this.productName);
    alert ('Saving product:' +this.productName)
  }
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.productName = inputElement.value; 
  }
}
