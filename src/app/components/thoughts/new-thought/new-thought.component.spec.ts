import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThoughtComponent } from './new-thought.component';

describe('NewThoughtComponent', () => {
  let component: NewThoughtComponent;
  let fixture: ComponentFixture<NewThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewThoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
