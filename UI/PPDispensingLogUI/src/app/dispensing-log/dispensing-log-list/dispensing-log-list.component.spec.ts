import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensingLogListComponent } from './dispensing-log-list.component';

describe('DispensingLogListComponent', () => {
  let component: DispensingLogListComponent;
  let fixture: ComponentFixture<DispensingLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensingLogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensingLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
