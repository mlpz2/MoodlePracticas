import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {usuario} from "./usuarios";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInFlag = false;
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  register(username: string, password: string) {
    const registerUrl = `${this.apiUrl}/register`;

    return this.http.post(registerUrl, { username, password });
  }

  login(username: string, password: string) {
    const loginUrl = `${this.apiUrl}/login`;

    const loginData = this.http.post(loginUrl, { username, password });



    const isValidUser = this.checkCredentials(username, password);

    if (isValidUser) {
      this.setSession(username);
      this.isLoggedInFlag = true;
    } else {
      this.handleFailedLogin();
      this.isLoggedInFlag = false;

    }
  }

  private checkCredentials(username: string, password: string): boolean {
    const validUsername = 'demo';
    const validPassword = 'password';

    return username === validUsername && password === validPassword;
  }

  private setSession(username: string): void {
    this.isLoggedInFlag = true;
    console.log(`User ${username} logged in successfully.`);
  }

  private handleFailedLogin(): void {
    this.isLoggedInFlag = false;
    console.log('Invalid username or password. Please try again.');
  }

  logout(): void {
    this.isLoggedInFlag = false;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInFlag;
  }
}
