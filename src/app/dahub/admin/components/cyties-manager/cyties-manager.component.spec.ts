import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CytiesManagerComponent } from './cyties-manager.component';

describe('CytiesManagerComponent', () => {
  let component: CytiesManagerComponent;
  let fixture: ComponentFixture<CytiesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CytiesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CytiesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
