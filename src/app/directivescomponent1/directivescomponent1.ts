import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directivescomponent1',
    imports: [CommonModule],
  standalone: true,
  templateUrl: './directivescomponent1.html'
})
export class Directivescomponent1 {
  items: string[] = ['java','html'];

}
