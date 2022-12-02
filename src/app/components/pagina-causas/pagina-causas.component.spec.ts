import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCausasComponent } from './pagina-causas.component';

describe('PaginaCausasComponent', () => {
  let component: PaginaCausasComponent;
  let fixture: ComponentFixture<PaginaCausasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCausasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCausasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
