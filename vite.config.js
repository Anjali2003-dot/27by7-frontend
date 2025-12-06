import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["webapp27by7.onrender.com"],
    host: "0.0.0.0",
    port: process.env.PORT,
  },
});
