import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserInfo } from '../models/user-info';

type DB_TYPE = "postgres" | "sqlite"

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as DB_TYPE,
  host: process.env.DB_URL,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.NODE_ENV !== 'test' ? true : false,
  logging: true,
  entities: [UserInfo],
  extra: process.env.NODE_ENV !== 'test' ? {
    ssl: {
      rejectUnauthorized: false, // Bypasses SSL certificate validation
    },
  } : undefined,
});
