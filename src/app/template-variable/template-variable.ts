import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  template: `
    <input type="text" #firstName />
    <button (click)="readFirstName(firstName.value)">Button</button>
  `,
  styleUrls: ['./template-variable.css']
})
export class TemplateVariableComponent {

  readFirstName(value: string) {
    console.log('readFirstName:', value);
  }

}
