import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-component1',
  imports: [FormsModule],
  templateUrl: './component1.html',
  styles: [".d1{color:blue}", ".d2{font-size:30px}"]

})
export class Component1 {

  s1="red";
  s2="100px";
  c1="d1 d2";
  v1=1000;

  changeV1()
  {
    this.v1+=20000;
  }
  readV1()
  {
  
    console.log(this.v1);
  }
}
