import { MeasurementComponent } from "./measurement.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


describe('MeasurementComponent', () => {
  let component: MeasurementComponent;
  let fixture: ComponentFixture<MeasurementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeasurementComponent]
    });

    fixture = TestBed.createComponent(MeasurementComponent);
    component = fixture.componentInstance;

  });

  it('should render profile.name - test for property binding', () => {
    let name = component.profiles[0].name;

    let de = fixture.debugElement.query(By.css('profile-name'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('thermometer');

  });

  it('should render parameter.name - test for property binding', () => {
    let name = component.parameters[0].name;

    let de = fixture.debugElement.query(By.css('parameter-name'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('Temprature');

  });


});
