import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcontainerComponent } from './rightcontainer.component';

describe('RightcontainerComponent', () => {
  let component: RightcontainerComponent;
  let fixture: ComponentFixture<RightcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
