import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  private router = inject(Router);

  signup(userData: { name: string; email: string; password: string }) {
    // Simulate success response using RxJS
    return {
      subscribe: ({ next, error }: any) => {
        // fake success
        if (userData.email && userData.password) {
          next({ message: 'Signup successful!' });
        } else {
          error({ message: 'Signup failed' });
        }
      }
    };
  }
  

  login(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string }>('http://localhost:5000/api/auth/login', credentials);
  }
  
  

 // login(token: string) {
   // localStorage.setItem(this.tokenKey, token);
  //}

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
