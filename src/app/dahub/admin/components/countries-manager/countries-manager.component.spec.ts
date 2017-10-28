import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesManagerComponent } from './countries-manager.component';

describe('CountriesManagerComponent', () => {
  let component: CountriesManagerComponent;
  let fixture: ComponentFixture<CountriesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
