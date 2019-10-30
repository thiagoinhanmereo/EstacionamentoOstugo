import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFuncComponent } from './cad-func.component';

describe('CadFuncComponent', () => {
  let component: CadFuncComponent;
  let fixture: ComponentFixture<CadFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
