import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcursoComponent } from './crearcurso.component';

describe('CrearcursoComponent', () => {
  let component: CrearcursoComponent;
  let fixture: ComponentFixture<CrearcursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearcursoComponent]
    });
    fixture = TestBed.createComponent(CrearcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
