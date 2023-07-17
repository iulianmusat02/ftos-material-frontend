import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageUserInterfaceComponent } from './homepage-user-interface.component';

describe('HomepageUserInterfaceComponent', () => {
  let component: HomepageUserInterfaceComponent;
  let fixture: ComponentFixture<HomepageUserInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageUserInterfaceComponent]
    });
    fixture = TestBed.createComponent(HomepageUserInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
