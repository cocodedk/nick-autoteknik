import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load all sections without errors", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto("/");

    // Check that all main sections are present
    await expect(page.locator("h1")).toContainText("Nick Autoteknik");
    await expect(page.locator("#services")).toBeVisible();
    await expect(page.locator("#galleri")).toBeVisible();
    await expect(page.locator("#anmeldelser")).toBeVisible();
    await expect(page.locator("#kontakt")).toBeVisible();

    // Check no console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test("should be mobile responsive", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Hero section should be visible on mobile
    await expect(page.locator("h1")).toBeVisible();

    // CTA buttons should be visible
    await expect(page.getByRole("link", { name: /ring nu/i })).toBeVisible();
  });

  test("should display business information", async ({ page }) => {
    await page.goto("/");

    // Check contact info is present
    await expect(page.getByText("26 80 81 88")).toBeVisible();
    await expect(page.getByText("nickautoteknik@gmail.com")).toBeVisible();
    await expect(page.getByText(/Nyholms Allé 21/)).toBeVisible();
    await expect(page.getByText("41401869")).toBeVisible();
  });
});
