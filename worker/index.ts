import { Hono } from "hono";

const app = new Hono();

app.get("/api/", (c) => {
  return c.json({
    message: "Hello Hono!",
  });
});

export default {
  fetch: app.fetch,
} satisfies ExportedHandler<Env>;
