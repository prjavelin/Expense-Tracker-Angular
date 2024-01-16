import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDocsComponent } from './import-docs.component';

describe('ImportDocsComponent', () => {
  let component: ImportDocsComponent;
  let fixture: ComponentFixture<ImportDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportDocsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
