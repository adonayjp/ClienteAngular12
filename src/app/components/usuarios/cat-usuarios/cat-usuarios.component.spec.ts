import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatUsuariosComponent } from './cat-usuarios.component';

describe('CatUsuariosComponent', () => {
  let component: CatUsuariosComponent;
  let fixture: ComponentFixture<CatUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
