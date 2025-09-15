import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  @Output() loginClicked = new EventEmitter<void>();

  onRegister() {
    if (!this.name || !this.email || !this.username || !this.password || !this.confirmPassword) {
      alert('Can not be null any filed!');
    } else if (this.password !== this.confirmPassword) {
      alert('Please Confirm your Password and Password!');
    } else { 
      alert(`Registration successful!\nWelcome ${this.name}`);
    }    
  }

  showLogin() {
    this.loginClicked.emit(); // parent কে signal
  }
}
