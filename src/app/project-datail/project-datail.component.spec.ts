import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDatailComponent } from './project-datail.component';

describe('ProjectDatailComponent', () => {
  let component: ProjectDatailComponent;
  let fixture: ComponentFixture<ProjectDatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
