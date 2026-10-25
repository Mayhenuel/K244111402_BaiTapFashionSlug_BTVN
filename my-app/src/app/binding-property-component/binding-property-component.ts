import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  nameid ="nameid";
  name = "Nguyen Thi Hang"
  emailid = 'emailId';
  email = 'hang@gmail.com';
  isDisabled = false;
  hello = 'Hello Angular!';
}
