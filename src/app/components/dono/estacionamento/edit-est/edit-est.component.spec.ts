import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstComponent } from './edit-est.component';

describe('EditEstComponent', () => {
  let component: EditEstComponent;
  let fixture: ComponentFixture<EditEstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
