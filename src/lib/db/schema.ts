/**
 * Database schema for VoidXHub v3
 * Using Drizzle ORM + PostgreSQL
 */

import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  boolean,
  uuid,
  jsonb,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  credits: integer("credits").notNull().default(0),
  role: text("role").notNull().default("user"), // user | moderator | admin
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const tools = pgTable("tools", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  game: text("game").notNull(), // freefire | bgmi | codm | valorant | apex
  description: text("description"),
  creditCost: integer("credit_cost").notNull().default(0),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").notNull().default(true),
  deviceTiers: jsonb("device_tiers").$type<string[]>().default([]), // which tiers it supports
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const licenses = pgTable("licenses", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  toolId: integer("tool_id").references(() => tools.id),
  userId: integer("user_id").references(() => users.id),
  deviceId: text("device_id"), // optional device lock
  expiresAt: timestamp("expires_at"),
  isRedeemed: boolean("is_redeemed").notNull().default(false),
  createdBy: integer("created_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const tournaments = pgTable("tournaments", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  game: text("game").notNull(),
  format: text("format").notNull(), // solo | duo | squad
  entryFee: integer("entry_fee").notNull(), // in paise or credits
  prizePool: integer("prize_pool").notNull(),
  maxPlayers: integer("max_players").notNull(),
  status: text("status").notNull().default("upcoming"), // upcoming | live | completed
  startAt: timestamp("start_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const tournamentEntries = pgTable("tournament_entries", {
  id: serial("id").primaryKey(),
  tournamentId: integer("tournament_id")
    .notNull()
    .references(() => tournaments.id),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  teamName: text("team_name"),
  players: jsonb("players").$type<string[]>().default([]),
  txnId: text("txn_id"),
  status: text("status").notNull().default("pending"), // pending | verified | rejected
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const auditLogs = pgTable("audit_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  action: text("action").notNull(),
  meta: jsonb("meta"),
  ip: text("ip"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
