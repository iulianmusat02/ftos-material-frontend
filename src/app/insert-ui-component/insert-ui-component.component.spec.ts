import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUiComponentComponent } from './insert-ui-component.component';

describe('InsertUiComponentComponent', () => {
  let component: InsertUiComponentComponent;
  let fixture: ComponentFixture<InsertUiComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertUiComponentComponent]
    });
    fixture = TestBed.createComponent(InsertUiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
