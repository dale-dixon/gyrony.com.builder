import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyMainComponent } from './technology-main.component';

describe('TechnologyMainComponent', () => {
  let component: TechnologyMainComponent;
  let fixture: ComponentFixture<TechnologyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
