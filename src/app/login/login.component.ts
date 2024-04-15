import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loggedIn: boolean = false;  
  @Output() loginStatus = new EventEmitter<boolean>();
  constructor(private route:ActivatedRoute, private router: Router ){

  }
  login() {
    if (this.email === 'shashanks874pm@gmail.com' && this.password === 'password') {
      console.log('Login successful');
      this.router.navigate(['/landing'])
    } else {
      console.log('Login failed. Invalid email or password.');
      
    }
  }
}
