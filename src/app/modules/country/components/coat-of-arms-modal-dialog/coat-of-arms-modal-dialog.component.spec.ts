import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatOfArmsModalDialogComponent } from './coat-of-arms-modal-dialog.component';

describe('CoatOfArmsModalDialogComponent', () => {
  let component: CoatOfArmsModalDialogComponent;
  let fixture: ComponentFixture<CoatOfArmsModalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoatOfArmsModalDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoatOfArmsModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
