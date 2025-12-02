import {test,expect} from '@playwright/test';
import{faker} from '@faker-js/faker';

test("shouid be able to add todo ",async ({page})=>{
   await page.goto("/signup");
   await page.type('[data-testid="first-name"]',faker.person.firstName());

   await page.type('[data-testid="last-name"]',faker.person.lastName());
   await page.type('[data-testid="email"]',faker.internet.email());
   await page.type('[data-testid="password"]',"Test1234");
   await page.type('[data-testid="confirm-password"]',"Test1234");
   await page.click('[data-testid="submit"]');
   await page.click('[data-testid="add"]');
   await page.type('[data-testid="new-todo"]','playwright');
   await page.click('[data-testid="submit-newTask"]');
   const todoText = await page
   .locator('[data-testid="todo-item"]')
   .nth(0)
   .innerText();
   expect(todoText).toEqual('playwright');

   })

   test("shouid be able to delete todo ",async ({page})=>{
   await page.goto("/signup");
   await page.type('[data-testid="first-name"]',faker.person.firstName());
   await page.type('[data-testid="last-name"]',faker.person.lastName());
   await page.type('[data-testid="email"]',faker.internet.email());
   await page.type('[data-testid="password"]',"Test1234");
   await page.type('[data-testid="confirm-password"]',"Test1234");
   await page.click('[data-testid="submit"]');
   await page.click('[data-testid="add"]');
   await page.type('[data-testid="new-todo"]','playwright');
   await page.click('[data-testid="submit-newTask"]');
   await page.click('[data-testid="delete"]');
   const noTodoMassage = page.locator('[data-testid="no-todos"]');
   await expect(noTodoMassage).toBeVisible();
   

   });
