import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEstComponent } from './cad-est.component';

describe('CadEstComponent', () => {
  let component: CadEstComponent;
  let fixture: ComponentFixture<CadEstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadEstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
