/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  test: {
    globals: false,
    environment: "node",
    include: ["tests/**/*.test.{ts,tsx}"],
    setupFiles: [],
    env: {
      // Reminders tests for the "failed" path expect sendReminder to throw when
      // no SMS/email provider is configured. Keep these unset so the fallback
      // branch triggers deterministically.
      TWILIO_ACCOUNT_SID: "",
      TWILIO_AUTH_TOKEN: "",
      TWILIO_FROM_NUMBER: "",
      RESEND_API_KEY: "",
      SENDGRID_API_KEY: "",
    },
  },
}));
