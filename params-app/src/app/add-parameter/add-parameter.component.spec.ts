import { AddParameterComponent } from "./add-parameter.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('AddParameterComponent', () => {
  let component: AddParameterComponent;
  let fixture: ComponentFixture<AddParameterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddParameterComponent]
    });

    fixture = TestBed.createComponent(AddParameterComponent);
    component = fixture.componentInstance;
  });

  it('should submit form when submit form', () => {
    let button = fixture.debugElement.query(By.css('btn-custom'));
    button.triggerEventHandler('ngSubmit', null);

    expect(component.submitted).toBe(true);

  });

});
