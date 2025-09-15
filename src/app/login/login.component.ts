import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RegistrationComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // username: string = '';
  // password: string = '';
  // showRegistration: boolean = false;

  // onLogin() {
  //   if (this.username === '' || this.password === '') {
  //     alert('Input Username and Password!');
  //   } else {
  //     alert(`Login successful!\nUser: ${this.username}`);
  //   }
  // }


  

  name: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  
@Output() registerClicked = new EventEmitter<void>();

  // Login form submit
  onLogin() {
    if (!this.username || !this.password) {
      alert('Please enter username and password!');
      return;
    }
    alert(`Login successful!\nUsername: ${this.username}`);
  }

  // Registration link click
  showRegister() {
    this.registerClicked.emit(); // parent কে signal পাঠানো
  }
}
