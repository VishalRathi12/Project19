const { test, expect } = require('@playwright/test');

test('Open Google and check title',{tag:['@PlaywrightWithJenkins'] }, async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
});
