import { drizzle } from "drizzle-orm/mysql2"; // Use mysql2, not mysql-core
import { seed } from "drizzle-seed";
import * as schema from './src/db/schema';
import mysql from "mysql2/promise"; // Import mysql2 for connection

async function main() {
  // Create MySQL connection using mysql2
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "twitter",
  });

  // Pass the MySQL connection to drizzle
  const db = drizzle(connection);

  // Seed the database
  await seed(db, schema).refine((f) => ({
    users: {
      count: 30,
      columns: {
        username: f.fullName(),
        password: f.string(),
        age: f.int({ minValue: 18, maxValue: 80 }),
      },
    },
    posts: {
      count: 30,
      columns: {
        title: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    comments: {
      count: 30,
      columns: {
        description: f.loremIpsum(),
      },
    },
  }));

  console.log("Database seeded successfully!");

  // Close the MySQL connection
  await connection.end();
}

main().catch((err) => console.error(err));
