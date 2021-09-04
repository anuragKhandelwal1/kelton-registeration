import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeltonComponent } from './kelton.component';

describe('KeltonComponent', () => {
  let component: KeltonComponent;
  let fixture: ComponentFixture<KeltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeltonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
