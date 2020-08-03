const request = require("supertest");
const app = require("../src/backend/app");
const meals = require("../src/backend/data/meals");
const reviews = require("../src/backend/data/reviews");
const reservations = require("../src/backend/data/reservations");

describe("GET /meals", () => {
    test("responds with all meals from data file", async () => {
        const response = await request(app).get("/meals");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(meals);
    });
});

describe("GET /meals", () => {
    test("returns all meals from data file as array", async () => {
        const response = await request(app).get("/meals");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /meals/:id", () => {
    test("responds with a single meal from with the correct id", async () => {
        const randomId = Math.floor(Math.random() * (meals.length - 1 + 1)) + 1;
        const response = await request(app).get(`/meals/${randomId}`);
        const foundMeal = meals.find(meal => meal.id === randomId);
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(foundMeal);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});

describe("GET /reservations", () => {
    test("responds with all reservations from data file", async () => {
        const response = await request(app).get("/reservations");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(reservations);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /reservations", () => {
    test("responds with reservations from data file as array", async () => {
        const response = await request(app).get("/reservations");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /reservations/:id", () => {
    test("responds with a single meal from with the correct id", async () => {
        const randomId = Math.floor(Math.random() * (reservations.length - 1 + 1)) + 1;
        const response = await request(app).get(`/reservations/${randomId}`);
        const foundReservation = reservations.find(reservation => reservation.id === randomId);
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(foundReservation);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});

describe("GET /reviews", () => {
    test("responds with all reviews from data file", async () => {
        const response = await request(app).get("/reviews");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(reviews);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /reviews", () => {
    test("responds with reviews from data file as array", async () => {
        const response = await request(app).get("/reviews");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /reviews/:id", () => {
    test("responds with a single meal from with the correct id", async () => {
        const randomId = Math.floor(Math.random() * (reviews.length - 1 + 1)) + 1;
        const response = await request(app).get(`/reviews/${randomId}`);
        const foundReview = reviews.find(review => review.id === randomId);
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(foundReview);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});
