import { ParameterComponent } from "./parameter.component";
import { ParameterService } from "../services/parameter.service";
import { Observable } from 'rxjs';
import { from } from 'rxjs';


describe('ParameterComponent', () => {
  let component: ParameterComponent
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
    component = new ParameterComponent(null, service)
  });

  it('should set parameters property with items returns from server', () => {

    spyOn(service, 'getAllParameters').and.callFake(() => {
      return from([test_params]).subscribe(e => console.log(e));
    });

    component.ngOnInit();

    expect(component.parameters).toBe(test_params);
  });

  it('', () => {

  });
});
