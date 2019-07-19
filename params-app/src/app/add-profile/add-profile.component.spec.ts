import { AddProfileComponent } from "./add-profile.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('AddProfileComponent', () => {
  let component: AddProfileComponent;
  let fixture: ComponentFixture<AddProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProfileComponent]
    });

    fixture = TestBed.createComponent(AddProfileComponent);
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
