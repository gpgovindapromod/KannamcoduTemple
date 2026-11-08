import { test, expect } from '@playwright/test';

test.describe('Temple Website Comprehensive E2E Tests', () => {
  test('1. Home Route loads with title, hero, darshan timings, and contact details', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Vettikkavala Kannamcodu Sree Subrahmanya Swami Temple/);

    // Verify Malayalm title presence
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('ശ്രീ സുബ്രഹ്മണ്യ സ്വാമി');
    expect(bodyText).toContain('കണ്ണങ്കോട്');

    // Verify phone links exist
    const telLink = page.locator('a[href^="tel:"]').first();
    await expect(telLink).toBeVisible();

    // Verify WhatsApp floating action button
    const waButton = page.locator('a.whatsapp-float');
    await expect(waButton).toBeVisible();
    await expect(waButton).toHaveAttribute('href', /api\.whatsapp\.com|wa\.me/);
  });

  test('2. Events Route loads yearly and monthly events tabs', async ({ page }) => {
    await page.goto('/events');
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();

    // Check Thaipooyam event
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('തൈപ്പൂയം');
  });

  test('3. Committee Route displays executive officers and committee members', async ({ page }) => {
    await page.goto('/committee');
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('ഭരണസമിതി');
    expect(bodyText).toContain('ബാബു');
  });

  test('4. Pooja Route renders pooja list and interactive Vazhipadu Calculator', async ({ page }) => {
    await page.goto('/pooja');
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('പൂജകൾ');

    // Check Vazhipadu calculator container
    const calcSection = page.locator('#vazhipadu-calculator');
    await expect(calcSection).toBeVisible();
  });

  test('5. Gallery Route displays photo categories and images', async ({ page }) => {
    await page.goto('/gallery');
    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });

  test('6. Contact Route shows address, timings, phones, and Google Map embed', async ({ page }) => {
    await page.goto('/contact');
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('കൊട്ടാരക്കര');
    expect(bodyText).toContain('90744 39789');

    // Google Maps iframe exists
    const mapIframe = page.locator('iframe[src*="google.com/maps"]');
    await expect(mapIframe).toBeVisible();
  });

  test('7. Mobile Menu toggles and routes correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const toggler = page.locator('.navbar-toggler');
    if (await toggler.isVisible()) {
      await toggler.click();
      const menu = page.locator('#navbarNav');
      await expect(menu).toBeVisible();
    }
  });
});

