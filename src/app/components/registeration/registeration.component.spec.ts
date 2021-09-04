import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RegisterationComponent } from './registeration.component';

describe('RegisterationComponent', () => {
  let component: RegisterationComponent;
  let fixture: ComponentFixture<RegisterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegisterationComponent]
    });
    fixture = TestBed.createComponent(RegisterationComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should fetch all countries on init', () => {
      spyOn(component, 'getAllCountries').and.callThrough();
      component.ngOnInit();
      expect(component.getAllCountries).toHaveBeenCalled();
    });

    it('should init form', () => {
      spyOn<any>(component, 'initForm').and.callThrough();
      component.ngOnInit();
      expect(component['initForm']).toHaveBeenCalled();
    });
  });
});
