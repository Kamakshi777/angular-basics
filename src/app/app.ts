import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1 } from './bindingscomponent1/component1';
import { Directivescomponent1 } from './directivescomponent1/directivescomponent1';
import { Directivescomponent2 } from './directivescomponent2/directivescomponent2';
import { Components } from './components/components';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Component1,FormsModule,Directivescomponent1,Components,Directivescomponent2 ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app2');
}
