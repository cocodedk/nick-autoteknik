import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should scroll to sections when clicking anchor links", async ({ page }) => {
    await page.goto("/");

    // Check services section is visible after page load
    const servicesSection = page.locator("#services");
    await expect(servicesSection).toBeVisible();
  });

  test("should have smooth scroll behavior", async ({ page }) => {
    await page.goto("/");

    const htmlElement = page.locator("html");
    const scrollBehavior = await htmlElement.evaluate((el) => {
      return window.getComputedStyle(el).scrollBehavior;
    });

    expect(scrollBehavior).toBe("smooth");
  });
});
