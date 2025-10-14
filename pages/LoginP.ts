import { Page } from "@playwright/test";

export class LoginP{

    constructor(private page:Page) {}

    async loginApplication(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async enterUsername(username:string){
        await this.page.fill("//input[@name='username']",username);
    }
    async enterPassword(password:string){
        await this.page.fill("//input[@name='password']",password);
    }
    async clickLogin(){
        await this.page.click("//button[@type='submit']");
    }

    async loginP(user:string,pass:string){

        await this.loginApplication();
        await this.enterUsername(user);
        await this.enterPassword(pass);
        await this.clickLogin();
    }
}