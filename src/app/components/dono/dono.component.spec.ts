import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoComponent } from './dono.component';

describe('DonoComponent', () => {
  let component: DonoComponent;
  let fixture: ComponentFixture<DonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
