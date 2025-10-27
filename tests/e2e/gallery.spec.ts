import { test, expect } from "@playwright/test";

test.describe("Gallery", () => {
  test("should display gallery images", async ({ page }) => {
    await page.goto("/");

    const gallerySection = page.locator("#galleri");
    await expect(gallerySection).toBeVisible();

    // Check that gallery has images
    const images = gallerySection.locator("img");
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(0);
  });

  test("should have alt text on all images", async ({ page }) => {
    await page.goto("/");

    const galleryImages = page.locator("#galleri img");
    const count = await galleryImages.count();

    for (let i = 0; i < count; i++) {
      const img = galleryImages.nth(i);
      const alt = await img.getAttribute("alt");
      expect(alt).toBeTruthy();
      expect(alt?.length).toBeGreaterThan(0);
    }
  });

  test("should lazy load gallery images", async ({ page }) => {
    await page.goto("/");

    const galleryImages = page.locator("#galleri img");
    const firstImage = galleryImages.first();

    // Check loading attribute
    const loading = await firstImage.getAttribute("loading");
    expect(loading).toBe("lazy");
  });
});
