export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Easycommerce";
export const APP_DESCRIPTION =
  process.env.APP_DESCRIPTION || "Ecommerce made easy.";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCT_LIMIT =
  Number(process.env.LATEST_PRODUCT_LIMIT) || 4;

export const signInDefaultValues = {
  email: "",
  password: "",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
