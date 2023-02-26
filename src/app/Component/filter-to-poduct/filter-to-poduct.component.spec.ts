import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterToPoductComponent } from './filter-to-poduct.component';

describe('FilterToPoductComponent', () => {
  let component: FilterToPoductComponent;
  let fixture: ComponentFixture<FilterToPoductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterToPoductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterToPoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
