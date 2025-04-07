import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // make sure this path is correct

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  signupForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  onSubmit() {
    if (this.signupForm.valid) {
      const { name, email, password, confirmPassword } = this.signupForm.value;

      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      this.authService.signup({ name, email, password }).subscribe({
        next: (res: any) => {
          console.log('Signup successful', res);
          this.router.navigate(['/login']);
        },
        error: (err: any) => {
          console.error('Signup failed', err);
          alert('Signup failed. Please try again.');
        },
      });
    }
  }
}
