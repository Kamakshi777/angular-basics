import { Component } from '@angular/core';

@Component({
  selector: 'app-directivescomponent2',
 template: `
    <h3>Languages List</h3>
    <ul>
      <li *ngFor="let lang of languages; let i = index">
        {{ i + 1 }}. {{ lang }}
      </li>
    </ul>
  `
})
export class Directivescomponent2 {
  
  languages: string[] = ['JavaScript', 'Python', 'Java', 'Angular'];
}
