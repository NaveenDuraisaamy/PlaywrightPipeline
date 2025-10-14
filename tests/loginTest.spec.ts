import{test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test('Extend',async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const login= new LoginPage();
    await login.logins(page,"Admin","admin123");
});