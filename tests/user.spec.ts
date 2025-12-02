
import {expect, test} from '@playwright/test';
import{faker} from '@faker-js/faker';
import RegisterPage from '../pages/RegisterPage';
import TodoPage from '../pages/TodoPage';

test("shouid be able to register to the todo website",async ({page})=>{
   const registerPage =new RegisterPage(page);
  await registerPage.load();
  await registerPage.register();
  const todoPage = new TodoPage(page);
  const welcomeMessage = todoPage.getWelcomeMessage();
   await expect(welcomeMessage).toBeVisible();





})