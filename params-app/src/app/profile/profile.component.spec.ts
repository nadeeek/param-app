import { ProfileComponent } from "./profile.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import { ProfileService } from "../services/profile.service";

describe('ProfileComponent', () => {

  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
      declarations: [ProfileComponent],
      providers: [ProfileService]
    });

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  });

  // test cases for property binding
  it('should render profile name - test for property binding', () => {
    let name = component.profiles[0].name;

    let de = fixture.debugElement.query(By.css('profile-name'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('thermometer ');

  });

  it('should add Profile when click Add Profile Button', () => {
    let button = fixture.debugElement.query(By.css('btn-info'));
    button.triggerEventHandler('click', null);

    expect(component.addProfile).toBe(true);

  });


});
