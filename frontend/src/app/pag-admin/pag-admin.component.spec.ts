import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagAdminComponent } from './pag-admin.component';

describe('PagAdminComponent', () => {
  let component: PagAdminComponent;
  let fixture: ComponentFixture<PagAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
