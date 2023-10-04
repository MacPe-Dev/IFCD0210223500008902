import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCursosComponent } from './crear-cursos.component';

describe('CrearCursosComponent', () => {
  let component: CrearCursosComponent;
  let fixture: ComponentFixture<CrearCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCursosComponent]
    });
    fixture = TestBed.createComponent(CrearCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
