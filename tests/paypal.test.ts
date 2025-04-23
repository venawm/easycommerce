import { generateAccessToken, paypal } from "../lib/paypal";

//test to generate access token from paypal
test("generate a token from paypal", async () => {
  const tokenResponse = await generateAccessToken();
  console.log(tokenResponse);
  expect(typeof tokenResponse).toBe("string");
  expect(tokenResponse.length).toBeGreaterThan(0);
});

//test to create a paypal order
test("creates a paypal order", async () => {
  const token = await generateAccessToken();
  const price = 10.0;

  const orderResponse = await paypal.createOrder(price);
  console.log(orderResponse);

  expect(orderResponse).toHaveProperty("id");
  expect(orderResponse).toHaveProperty("status");
  expect(orderResponse.status).toBe("CREATED");
});

//test to capture payments with mock order
test("simulate capturing a payment from an order", async () => {
  const orderId = "100";
  const mockCaptuePayment = jest
    .spyOn(paypal, "capturePayment")
    .mockResolvedValue({ status: "COMPLETED" });

  const captureResponse = await paypal.capturePayment(orderId);
  expect(captureResponse).toHaveProperty("status", "COMPLETED");

  mockCaptuePayment.mockRestore();
});
