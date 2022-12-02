import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGraficasComponent } from './pagina-graficas.component';

describe('PaginaGraficasComponent', () => {
  let component: PaginaGraficasComponent;
  let fixture: ComponentFixture<PaginaGraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGraficasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
