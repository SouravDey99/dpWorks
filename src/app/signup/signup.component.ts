import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent{
  email: string = '';

  resetPassword() {
    alert(`Reset link sent to ${this.email}`);
  }

  closeModal() {
    alert("Modal closed"); // Replace with actual modal close logic
  }
}