import { AddParameterTypeComponent } from "./add-parameter-type.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('AddParameterTypeComponent', () => {
  let component: AddParameterTypeComponent;
  let fixture: ComponentFixture<AddParameterTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddParameterTypeComponent]
    });

    fixture = TestBed.createComponent(AddParameterTypeComponent);
    component = fixture.componentInstance;
  });

  it('should submit form when submit form', () => {
    let button = fixture.debugElement.query(By.css('btn-custom'));
    button.triggerEventHandler('ngSubmit', null);

    expect(component.submitted).toBe(true);

  });

  it('', () => {

  });
});
