import {int, mysqlTable,  text, varchar, timestamp } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';

// Define the "users" table
export const users = mysqlTable('users', {
  id: int("id").autoincrement().primaryKey(),
  username: varchar('username', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  age: int('age').notNull(),
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp()
});

// Define the "posts" table
export const posts = mysqlTable('posts', {
  id: int("id").autoincrement().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  userId: int('userId').notNull().references(() => users.id, {onDelete: 'cascade'}), // Foreign key referencing "users"\
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
});

// Define the "comments" table
export const comments = mysqlTable('comments', {
  id: int("id").autoincrement().primaryKey(),
  description: text('description').notNull(),
  userId: int('userId').notNull().references(() => users.id, {onDelete: 'cascade'}),  // Foreign key referencing "users"
  postId: int('postId').notNull().references(() => posts.id , {onDelete: 'cascade'}),  // Foreign key referencing "posts"
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
});

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts), // One user has many posts
  comments: many(comments), // One user has many comments
}));

export const postsRelations = relations(posts, ({ one, many }) => ({
  user: one(users, {
    fields: [posts.userId], // Foreign key
    references: [users.id], // Referenced column
  }),
  comments: many(comments), // One post has many comments
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  user: one(users, {
    fields: [comments.userId], // Foreign key
    references: [users.id], // Referenced column
  }),
  post: one(posts, {
    fields: [comments.postId], // Foreign key
    references: [posts.id], // Referenced column
  }),
}));