import { ParameterTypeComponent } from "./parameter-type.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('ParameterTypeComponent', () => {
  let component: ParameterTypeComponent;
  let fixture: ComponentFixture<ParameterTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParameterTypeComponent]
    });

    fixture = TestBed.createComponent(ParameterTypeComponent);
    component = fixture.componentInstance;
  });

  // test cases for property binding

  it('should render paramType.name - test for property binding', () => {

    let name = component.paramTypes[0].name;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('parameter-type-name'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('Cellius');

  });

  it('should render paramType.converter - test for property binding', () => {

    let converter = component.paramTypes[0].converter;

    let de = fixture.debugElement.query(By.css('parameter-type-converter'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('C');

  });

  it('should add Parameter type when click Add Parameter Type Button', () => {
    let button = fixture.debugElement.query(By.css('btn-info'));
    button.triggerEventHandler('click', null);

    expect(component.addParameterType).toBe(true);

  });

});
