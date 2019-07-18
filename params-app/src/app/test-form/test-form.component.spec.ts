import { TestFormComponent } from "./test-form.component";
import { FormBuilder } from "@angular/forms";

describe('AddParameterComponent', () => {
  var component: TestFormComponent;

  beforeEach(() => {
    component = new TestFormComponent(new FormBuilder);
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    let control = component.form.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make the email control required', () => {
    let control = component.form.get('email');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});
