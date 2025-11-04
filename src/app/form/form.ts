import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    age: null as number | null
  };

  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      console.log('✅ User Data:', this.user);
    } else {
      console.warn('Form is invalid');
    }
  }
}
