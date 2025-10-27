import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test("should have proper heading hierarchy", async ({ page }) => {
    await page.goto("/");

    // Check H1 exists and is unique
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);

    const h1Text = await page.locator("h1").textContent();
    expect(h1Text).toContain("Nick Autoteknik");
  });

  test("should have proper semantic HTML", async ({ page }) => {
    await page.goto("/");

    // Check for semantic sections
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    const sections = page.locator("section");
    const sectionCount = await sections.count();
    expect(sectionCount).toBeGreaterThan(0);
  });

  test("should have focus visible styles", async ({ page }) => {
    await page.goto("/");

    // Focus on first interactive element
    await page.keyboard.press("Tab");

    const focusedElement = page.locator(":focus");
    await expect(focusedElement).toBeVisible();
  });

  test("should have proper lang attribute", async ({ page }) => {
    await page.goto("/");

    const htmlLang = await page.locator("html").getAttribute("lang");
    expect(htmlLang).toBe("da");
  });

  test("should have aria labels on links", async ({ page }) => {
    await page.goto("/");

    // Check phone button has aria-label
    const phoneButton = page.locator('a[href^="tel:"]').first();
    const ariaLabel = await phoneButton.getAttribute("aria-label");
    expect(ariaLabel).toBeTruthy();
  });
});
