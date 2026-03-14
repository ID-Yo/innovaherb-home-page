import { test, expect } from "@playwright/test";

test("homepage exposes canonical SEO improvements and route normalization", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Mushroom Extract Sprays for Focus and Vitality/);
  await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
    "href",
    /https:\/\/innovaherb-home-page\.vercel\.app\/?$/,
  );
});
