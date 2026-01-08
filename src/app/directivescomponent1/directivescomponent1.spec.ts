import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directivescomponent1 } from './directivescomponent1';

describe('Directivescomponent1', () => {
  let component: Directivescomponent1;
  let fixture: ComponentFixture<Directivescomponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directivescomponent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directivescomponent1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
