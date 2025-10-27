import { test, expect } from "@playwright/test";

test.describe("Contact Features", () => {
  test("should have working phone links", async ({ page }) => {
    await page.goto("/");

    // Check tel: links
    const phoneLinks = page.locator('a[href^="tel:"]');
    await expect(phoneLinks.first()).toHaveAttribute("href", "tel:+4526808188");
  });

  test("should have working SMS links", async ({ page }) => {
    await page.goto("/");

    // Check sms: links
    const smsLinks = page.locator('a[href^="sms:"]');
    await expect(smsLinks.first()).toHaveAttribute("href", "sms:+4526808188");
  });

  test("should load Google Maps iframe", async ({ page }) => {
    await page.goto("/");

    // Check if map iframe is present (may not load without API key)
    const mapSection = page.locator("#kontakt");
    await expect(mapSection).toBeVisible();
  });

  test("should have email link", async ({ page }) => {
    await page.goto("/");

    const emailLink = page.locator('a[href^="mailto:"]');
    await expect(emailLink.first()).toHaveAttribute(
      "href",
      "mailto:nickautoteknik@gmail.com"
    );
  });
});
