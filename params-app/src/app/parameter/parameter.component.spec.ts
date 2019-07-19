import { ParameterComponent } from "./parameter.component";
import { ParameterService } from "../services/parameter.service";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { from } from 'rxjs';


describe('ParameterComponent', () => {
  let component: ParameterComponent;
  let fixture: ComponentFixture<ParameterComponent>;
  let service: ParameterService;
  let test_params = [
    {
      "id": 1,
      "name": "Temprature",
      "profile": "thermometer",
      "param_type": "cellius"
    },
    {
      "_id": null,
      "name": "pH value",
      "profile": "speedometer",
      "param_type": "Cellius",
      "id": 2
    },
    {
      "id": 3,
      "name": "Length",
      "profile": "ruler",
      "param_type": "centemeter"
    },
    {
      "id": 4,
      "name": "Speed",
      "profile": "speedometer",
      "param_type": "Kilometers per hour"
    },
    {
      "_id": null,
      "name": "Testing",
      "profile": "thermometer",
      "param_type": "Cellius",
      "id": 5
    }
  ];

  beforeEach(() => {
    service = new ParameterService(null);

    TestBed.configureTestingModule({
      declarations: [ParameterComponent]
    });

    fixture = TestBed.createComponent(ParameterComponent);
    component = fixture.componentInstance;
  });


  it('should set parameters property with items returns from server', () => {

    spyOn(service, 'getAllParameters').and.callFake(() => {
      return from([test_params]).subscribe(e => console.log(e));
    });

    component.ngOnInit();

    expect(component.parameters).toBe(test_params);
  });

  it('should render parameter.name - test for property binding', () => {

    let name = component.parameters[0].name;

    let de = fixture.debugElement.query(By.css('parameter-name'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('Temprature');
  });

  it('should render parameter.profile - test for property binding', () => {

    let profile = component.parameters[0].profile;

    let de = fixture.debugElement.query(By.css('parameter-profile'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('thermometer');
  });

  it('should render parameter.param_type - test for property binding', () => {

    let param_type = component.parameters[0].param_type;

    let de = fixture.debugElement.query(By.css('param-type'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('cellius');
  });

  it('should add Parameter when click Add Parameter Button', () => {
    let button = fixture.debugElement.query(By.css('btn-add-parameter'));
    button.triggerEventHandler('click', null);

    expect(component.addParameter).toBe(true);

  });

  it('should delete Parameter when click Delete Button', () => {
    let button = fixture.debugElement.query(By.css('btn-delete'));
    button.triggerEventHandler('click', null);

    expect(component.deleteParameter).toBe(true);

  });

  it('should update Parameter when click Edit Button', () => {
    let button = fixture.debugElement.query(By.css('btn-edit'));
    button.triggerEventHandler('click', null);

    expect(component.updateParameter).toBe(true);

  });

});
