import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsCrudComponent } from './mentors-crud.component';

describe('MentorsCrudComponent', () => {
  let component: MentorsCrudComponent;
  let fixture: ComponentFixture<MentorsCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
