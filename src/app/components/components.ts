import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  template: `
    <p>{{ name }} - {{ age }}</p>
    <p>{{ isEmployed }} - {{ salary }}</p>
    <p>{{ empId }}</p>
    <p>{{ empName }}</p>
    <p>{{ companyName }}</p>
    <p>{{ name }}</p>
  `
})
export class Components {
  name: string = 'Vyshnavi';
  age: number = 22;
  salary: number = 4500.5;
  isEmployed: boolean = true;

  // Instance fields
  empId: number = 101;
  empName: string = 'Vyshnavi';

  // Static field
  static companyName: string = 'Google';

  companyName = Components.companyName;

   public name1 = 'Vyshnavi';

  constructor() {
    console.log('Component Loaded');
  }


}


