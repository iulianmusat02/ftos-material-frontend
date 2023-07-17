import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUiComponentComponent } from './edit-ui-component.component';

describe('EditUiComponentComponent', () => {
  let component: EditUiComponentComponent;
  let fixture: ComponentFixture<EditUiComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUiComponentComponent]
    });
    fixture = TestBed.createComponent(EditUiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
