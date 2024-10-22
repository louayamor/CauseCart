import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};

  private apiUrl = 'http://localhost:3000/api/users/register'; 

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      console.error('Passwords do not match!');
      alert('Passwords do not match!');
      return;
    }

    this.http.post(this.apiUrl, {
      username: this.user.username,
      email: this.user.email,
      password: this.user.password
    }).subscribe(
      (response: any) => {
        console.log('User registered successfully:', response);
        alert('Registration successful!');
        this.router.navigate(['/login']); 
      },
      (error) => {
        console.error('Registration error:', error);
        alert('Registration failed: ' + (error.error.msg || 'An error occurred'));
      }
    );
  }
}
