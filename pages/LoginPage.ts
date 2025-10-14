import {Page} from '@playwright/test';
export class LoginPage {
  // variables (properties)
  usernameField: string;
  passwordField: string;
  loginButton: string;

  // constructor - called automatically when object is created
  constructor() {
    this.usernameField = "//input[@name='username']";
    this.passwordField = "//input[@name='password']";
    this.loginButton = "//button[@type='submit']";
  }

  // method (function inside class)
  async logins(page:Page,user: string, pass: string) {
    await page.fill(this.usernameField, user);
    await page.fill(this.passwordField, pass);
    await page.click(this.loginButton);
  }
}
