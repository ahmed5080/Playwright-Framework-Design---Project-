import { Page } from "@playwright/test";
import{faker} from '@faker-js/faker';


export default class RegisterPage{
    private page:Page;

// Constructer
constructor(page : Page){
    this.page=page;
}


// Elements
private get firstNameInput(){
    return'[data-testid="first-name"]';
}

private get lasttNameInput(){
    return'[data-testid="last-name"]';
}

private get emailInput(){
    return'[data-testid="email"]';
}
private get passwordInput(){
    return'[data-testid="password"]';
}

private get ConfrimPasswordInput(){
    return'[data-testid="confirm-password"]';
}
private get submitButton(){
    return'[data-testid="submit"]';
}


// Methods or Steps
async load (){
    await this.page.goto("/signup");
}
    async register(){
    await this.page.type(this.firstNameInput,faker.person.firstName());
   await this.page.type(this.lasttNameInput,faker.person.lastName());
   await this.page.type(this.emailInput,faker.internet.email());
   await this.page.type(this.passwordInput,"Test1234");
   await this.page.type(this.ConfrimPasswordInput,"Test1234");
   await this.page.click(this.submitButton);
    }
}