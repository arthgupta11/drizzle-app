import { defineConfig } from 'drizzle-kit'

// via connection params
export default defineConfig({
  dialect: "mysql",
  out: "./src/drizzzle",
  schema:  "./src/db/schema.ts",
  dbCredentials: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "twitter",
  },
  verbose: true

})
