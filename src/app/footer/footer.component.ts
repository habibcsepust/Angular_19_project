import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
@Output() privacyClicked = new EventEmitter<void>();
@Output() termsOfServiceClicked = new EventEmitter<void>();
onPrivacyClick() {
    this.privacyClicked.emit(); // parent কে signal
  }

  onTermOfServiceClick() {
    this.termsOfServiceClicked.emit(); // parent কে signal
  }
  
}
