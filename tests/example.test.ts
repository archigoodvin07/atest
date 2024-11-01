// tests/example.test.ts
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
test('result1', async ({ page }) => {
  let result1 = 2 + 2;
console.log(result1);

});

test('result2', async ({ page }) => {
  let result2 = 3 + 5;
console.log(result2);
await expect(result2).toEqual(7)
});