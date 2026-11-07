const{test,expect} = require("@playwright/test");

test("Event Creation",async({page})=> 
{
    //Step1 - Login
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.getByPlaceholder("you@email.com").fill("sergiomarquine@gmail.com");
    await page.getByPlaceholder("••••••").fill("Sergio@123");
    await page.getByRole("button",{name:"Sign In"}).click();
    await expect(page.locator(".flex a").filter({hasText:"EventHub"})).toBeVisible();

    //Step2 - Create a new Event
    await page.locator(".relative button").nth(0).click();
    await page.locator(".absolute a").nth(0).click();
    const EventName = "Sergio Marquine Sports Summit";
    await page.locator("#event-title-input").fill(EventName);
    await page.locator("#admin-event-form textarea").fill("This event about sports discussions");
    await page.getByLabel("category").selectOption("Sports");
    await page.getByLabel("city").fill("Hyderabad");
    await page.getByLabel("venue").fill("Waverock Near Cityhive Mens Pg, Nannakramagudam");
    await page.getByLabel("Event Date & Time").fill("2026-10-29T18:00");
    await page.getByLabel("Price ($)").fill("100");
    await page.getByLabel("Total Seats").fill("500");
    await page.locator("#add-event-btn").click();
    await expect(page.locator("[aria-live='polite']").filter({hasText:"Event Created!"})).toBeVisible();

    //Step 3 — Find the event card and capture seats
    await page.locator("#nav-events").click();
    await expect(page.locator("[data-testid*='event-card']").first()).toBeVisible();
    const EventCard = page.locator("[data-testid*='event-card']").filter({hasText:EventName});
    const seatsBeforeBooking = await EventCard.locator("div:nth-child(2) >div:nth-child(3) span").textContent();
    const countBeforeBooking = parseInt(seatsBeforeBooking.trim().split(" ")[0],10);

    //Step 4 — Start booking
    await EventCard.getByRole("link",{name:"Book Now"}).click();

    //Step 5 — Fill booking form
    await expect(page.locator("#ticket-count")).toHaveText("1");
    await page.getByLabel("Full Name").fill("Sergio Marquine");
    await page.locator("#customer-email").fill("sergiomarquine@gmail.com");
    await page.getByPlaceholder("+91 98765 43210").fill("+91 98765 43210");
    await page.locator("#confirm-booking").click();

    // Step 6 — Verify booking confirmation
    await expect(page.locator(".booking-ref")).toBeVisible();
    const bookingRef = await page.locator(".booking-ref").textContent();

    //Step 7 — Verify in My Bookings
    await page.getByRole('button',{name:"View My Bookings"}).click();
    await expect(page).toHaveURL(/.*\/bookings/);
    const Booking_Card = page.locator("#booking-card")
    await expect(Booking_Card.first()).toBeVisible();
    await expect(Booking_Card.filter({hasText:bookingRef}).filter({hasText:EventName})).toBeVisible();

    //Step 8 — Verify seat reduction
    await page.locator("#nav-events").click();
    await expect(page.locator("[data-testid*='event-card']").first()).toBeVisible();
    const seatsAfterBooking = await EventCard.locator("div:nth-child(2) >div:nth-child(3) span").textContent();
    const countAfterBooking = parseInt(seatsAfterBooking.trim().split(" ")[0],10);
    await expect(countBeforeBooking-1).toEqual(countAfterBooking);


});