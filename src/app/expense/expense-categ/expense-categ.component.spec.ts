import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCategComponent } from './expense-categ.component';

describe('ExpenseCategComponent', () => {
  let component: ExpenseCategComponent;
  let fixture: ComponentFixture<ExpenseCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseCategComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
