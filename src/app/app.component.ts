import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,CommonModule,HeaderComponent
    ,FooterComponent,PrivacyPolicyComponent
    ,LoginComponent, RegistrationComponent
    ,TermsOfServiceComponent ,HomeComponent
    ,AboutComponent, ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Angular_19_project';
  showRegistration: string = "login";
  
  PageTransition(value: string) {
    this.showRegistration = value;
  }
}
