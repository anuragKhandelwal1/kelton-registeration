import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/interface/country.interface';
import { countries } from 'src/app/mocks/countries.mock';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  formGroup: FormGroup;
  countries: Country[];

  constructor() { }
  ngOnInit(): void {
    this.initForm();
    this.getAllCountries();
  }

  private initForm(): void {

    this.formGroup = new FormGroup({
      firstName: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
      lastName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phoneNumber: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    });

  }

  onSubmit(): void {
    if (!this.formGroup.valid) { return; }
    const { firstName, lastName } = this.formGroup.value;
    alert(`${firstName} ${lastName} has been registered sucessfully!`);
  }

  getAllCountries(): void {
    this.countries = countries;
  }

}
