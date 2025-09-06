import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDispensingLogComponent } from './add-dispensing-log.component';

describe('AddDispensingLogComponent', () => {
  let component: AddDispensingLogComponent;
  let fixture: ComponentFixture<AddDispensingLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDispensingLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDispensingLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
