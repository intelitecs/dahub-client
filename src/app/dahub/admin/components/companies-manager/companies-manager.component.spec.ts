import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesManagerComponent } from './companies-manager.component';

describe('CompaniesManagerComponent', () => {
  let component: CompaniesManagerComponent;
  let fixture: ComponentFixture<CompaniesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
