import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTargetComponent } from './project-target.component';

describe('ProjectTargetComponent', () => {
  let component: ProjectTargetComponent;
  let fixture: ComponentFixture<ProjectTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
