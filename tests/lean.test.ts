import { test, expect} from '@playwright/test';

test.describe('Profile Tests', () => {
    test('Add three random items to the cart and checkout the items', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.fill('input[id="user-name"]', 'standard_user');
        await page.fill('input[id="password"]', 'secret_sauce');
        await page.click('input[id="login-button"]');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.locator('button[id="react-burger-menu-btn"]')).toContainText('Open Menu');
        await page.waitForTimeout(5000);
        // Get all button elements on the page
        const allButtons = await page.$$('//button');
        // If there are fewer than three buttons, adjust the count
        const buttonCount = Math.min(allButtons.length, 3);
        if (buttonCount < 3) {
            console.log('Less than 3 buttons found. Adding only available buttons.');
        }
    
        // Shuffle and select three random buttons
        const selectedButtons = allButtons.sort(() => 0.5 - Math.random()).slice(0, buttonCount);
    
        // Click each selected button to simulate adding to the cart
        await page.waitForTimeout(5000);
        for (const button of selectedButtons) {
            await button.click();
            await page.waitForTimeout(5000); // Optional delay for UI update
        }

        // // Optional: Verify the items have been added to the cart
        // const cartItems = await page.$$eval("//a[@class='shopping_cart_link']", items => items.length);
        // console.log(`Number of items in cart: ${cartItems}`);
        // expect(cartItems).toBe(buttonCount); // Adjust based on how cart items can be verified

        // click on the cart icon for chekout the items
        await page.click("//a[@class='shopping_cart_link']");
        await page.click("//button[@id='checkout']");
        await page.fill('input[id="first-name"]', 'lean_test1');
        await page.fill('input[id="last-name"]', 'lean_test2');
        await page.fill('input[id="postal-code"]', '800031');
        await page.click('input[id="continue"]')
        await expect(page.locator("//span[@class='title']")).toContainText('Checkout: Overview');
        await expect(page.locator("//div[normalize-space()='Payment Information:']")).toContainText('Payment Information:');
        await expect(page.locator("//div[normalize-space()='Shipping Information:']")).toContainText('Shipping Information:');
        await expect(page.locator("//div[@class='summary_subtotal_label']")).toContainText('Item total:');
        await page.click("//button[@id='finish']")
        await expect(page.locator("//div[@class='header_secondary_container']")).toContainText('Checkout: Complete!');
        
    });
  });