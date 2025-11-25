import { relations } from "drizzle-orm";
import {
    sqliteTable,
    integer,
    text,
    primaryKey,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    username: text("username").notNull().unique(),
    bio: text("bio"),
    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .$defaultFn(() => new Date()),
});

export const posts = sqliteTable("posts", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
        .notNull()
        .references(() => users.id),
    title: text("title").notNull(),
    body: text("body").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .$defaultFn(() => new Date()),
});

export const comments = sqliteTable("comments", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    postId: integer("post_id")
        .notNull()
        .references(() => posts.id),
    userId: integer("user_id")
        .notNull()
        .references(() => users.id),
    body: text("body").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .$defaultFn(() => new Date()),
});

export const userFriends = sqliteTable(
    "user_friends",
    {
        userId: integer("user_id").notNull().references(() => users.id),
        friendId: integer("friend_id").notNull().references(() => users.id),
        createdAt: integer("created_at", { mode: "timestamp" })
            .notNull()
            .$defaultFn(() => new Date()),
    },
    (t) => ([
        primaryKey({ columns: [t.userId, t.friendId] }),
    ])
);

export const userRelations = relations(users, ({ many }) => ({
    posts: many(posts),
    comments: many(comments),
    userFriends: many(userFriends)
}))

export const postRelations = relations(posts, ({ one, many }) => ({
    user: one(users, {
        fields: [posts.userId],
        references: [users.id]
    }),
    comments: many(comments)
}))

export const commentRelations = relations(comments, ({ one }) => ({
    post: one(posts, {
        fields: [comments.postId],
        references: [posts.id]
    }),
    user: one(users, {
        fields: [comments.userId],
        references: [users.id]
    })
}))

export const userFriendsRelations = relations(userFriends, ({ one }) => ({
    user: one(users, {
        fields: [userFriends.userId],
        references: [users.id]
    }),
    friend: one(users, {
        fields: [userFriends.friendId],
        references: [users.id]
    })
}))
