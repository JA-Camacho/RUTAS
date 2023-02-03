import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagEstComponent } from './pag-est.component';

describe('PagEstComponent', () => {
  let component: PagEstComponent;
  let fixture: ComponentFixture<PagEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagEstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
