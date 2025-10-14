import{test} from '@playwright/test';
import { LoginP } from '../pages/LoginP';

test('POM',async({page})=>{

    const l= new LoginP(page);
    await l.loginP("admin","Admin@123");
});