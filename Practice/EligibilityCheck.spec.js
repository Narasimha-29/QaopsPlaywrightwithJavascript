const{test,expect} = require("@playwright/test")

test("Eligibility Check For Refund", async({page}) =>
{
    //Step 1 — Login
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.getByPlaceholder("you@email.com").fill("sergiomarquine@gmail.com");
    await page.getByPlaceholder("••••••").fill("Sergio@123");
    await page.getByRole("button",{name:"Sign In"}).click();
    await expect(page.locator(".flex a").filter({hasText:"EventHub"})).toBeVisible();

    //Step 2 — Book first event with 1 ticket (default)
    await page.locator("#nav-events").click();
    await expect(page.locator("[data-testid*='event-card']").first()).toBeVisible();
    await page.locator("[data-testid*='event-card']").first().getByRole("link",{name:"Book Now"}).click()
    await expect(page.locator("#ticket-count")).toHaveText("1");
    await page.getByLabel("Full Name").fill("Sergio Marquine");
    await page.locator("#customer-email").fill("sergiomarquine@gmail.com");
    await page.getByPlaceholder("+91 98765 43210").fill("+91 98765 43210");
    await page.locator("#confirm-booking").click();

    //Step 3 — Navigate to booking detail
    await page.getByRole('button',{name:"View My Bookings"}).click();
    await expect(page).toHaveURL(/.*\/bookings/);
    const Booking_Card = page.locator("#booking-card");
    await expect(Booking_Card.first()).toBeVisible();
    await Booking_Card.getByRole("button",{name:"View Details"}).first().click();
    expect(page.getByText("Booking Information")).toBeTruthy();

    //Step 4 — Validate booking ref
    const orderID = await page.locator(".font-mono.font-bold").first().textContent();
    const orderIDFirstChar = orderID.trim()[0];
    const eventTitle = await page.locator(".text-2xl").textContent();
    const eventTitleFirstChar = eventTitle.trim()[0];
    expect(orderIDFirstChar).toBe(eventTitleFirstChar);

    //Step 5 — Check refund eligibility
    await page.locator("#check-refund-btn").click();
    await expect(page.locator("#refund-spinner")).toBeVisible();
    await expect(page.locator("#refund-spinner")).not.toBeVisible({ timeout:6000 });

    //Step 6 — Validate result
    await expect(page.locator("#refund-result")).toBeVisible();
    await expect(page.locator("#refund-result")).toContainText("Eligible for refund.");
    await expect(page.locator("#refund-result")).toContainText(" Single-ticket bookings qualify for a full refund.")

})

test.only("Not Eligible For Refund", async({page}) =>
{
    //Step 1 — Login
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.getByPlaceholder("you@email.com").fill("sergiomarquine@gmail.com");
    await page.getByPlaceholder("••••••").fill("Sergio@123");
    await page.getByRole("button",{name:"Sign In"}).click();
    await expect(page.locator(".flex a").filter({hasText:"EventHub"})).toBeVisible();

    //Step 2 — Book first event with 1 ticket (default)
    await page.locator("#nav-events").click();
    await expect(page.locator("[data-testid*='event-card']").first()).toBeVisible();
    await page.locator("[data-testid*='event-card']").first().getByRole("link",{name:"Book Now"}).click()
    await expect(page.locator("#ticket-count")).toHaveText("1");
    await page.getByRole("button",{name : "+"}).click();
    await page.getByRole("button",{name : "+"}).click();
    await page.getByLabel("Full Name").fill("Sergio Marquine");
    await page.locator("#customer-email").fill("sergiomarquine@gmail.com");
    await page.getByPlaceholder("+91 98765 43210").fill("+91 98765 43210");
    await page.locator("#confirm-booking").click();

    //Step 3 — Navigate to booking detail
    await page.getByRole('button',{name:"View My Bookings"}).click();
    await expect(page).toHaveURL(/.*\/bookings/);
    const Booking_Card = page.locator("#booking-card");
    await expect(Booking_Card.first()).toBeVisible();
    await Booking_Card.getByRole("button",{name:"View Details"}).first().click();
    expect(page.getByText("Booking Information")).toBeTruthy();

     //Step 4 — Validate booking ref
    const orderID = await page.locator(".font-mono.font-bold").first().textContent();
    const orderIDFirstChar = orderID.trim()[0];
    const eventTitle = await page.locator(".text-2xl").textContent();
    const eventTitleFirstChar = eventTitle.trim()[0];
    expect(orderIDFirstChar).toBe(eventTitleFirstChar);

    //Step 5 — Check refund eligibility
    await page.locator("#check-refund-btn").click();
    await expect(page.locator("#refund-spinner")).toBeVisible();
    await expect(page.locator("#refund-spinner")).not.toBeVisible({ timeout:6000 });

    //Step 6 — Validate result (different assertions)
    await expect(page.locator("#refund-result")).toBeVisible();
    await expect(page.locator("#refund-result")).toContainText("Not eligible for refund.");
    await expect(page.locator("#refund-result")).toContainText("Group bookings (3 tickets) are non-refundable.")

});