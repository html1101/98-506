import type { comments, posts, userFriends, users } from "./schema";

export type User = typeof users.$inferSelect;
export type Post = typeof posts.$inferSelect;
export type Comment = typeof comments.$inferSelect;
export type UserFriend = typeof userFriends.$inferSelect;

export type NewUserInfo = typeof users.$inferInsert;
export type NewPostInfo = typeof posts.$inferInsert;
export type NewCommentInfo = typeof comments.$inferInsert;
export type NewUserFriendInfo = typeof userFriends.$inferInsert;
