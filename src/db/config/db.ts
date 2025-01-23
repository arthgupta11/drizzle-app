import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import * as mysql  from "mysql2/promise";
import * as schema from '../schema';

const poolConnection = mysql.createPool({
  host: "localhost",
  user: "root", 
  database: "twitter",
  password: '12345', 
  port: 3306,  
});

export const db = drizzle(poolConnection, { schema,  mode: "default" });

