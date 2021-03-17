import { Client } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

const db_password = process.env.DB_PASSWORD;
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_port: number = parseInt(<string>process.env.DB_PORT) || 5432;

const client = new Client({
  user: `${db_user}`,
  host: 'localhost',
  database: `${db_name}`,
  password: `${db_password}`,
  port: db_port,
});

client
  .connect()
  .then(() => console.log('connected to DB'))
  .catch((err: Error) => console.error('connection error ' + err));

export default client;
