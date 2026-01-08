import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directivescomponent2 } from './directivescomponent2';

describe('Directivescomponent2', () => {
  let component: Directivescomponent2;
  let fixture: ComponentFixture<Directivescomponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directivescomponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directivescomponent2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
