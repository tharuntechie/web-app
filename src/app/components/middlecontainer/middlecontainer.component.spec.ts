import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlecontainerComponent } from './middlecontainer.component';

describe('MiddlecontainerComponent', () => {
  let component: MiddlecontainerComponent;
  let fixture: ComponentFixture<MiddlecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddlecontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
