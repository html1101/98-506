import { db } from "./db";
import { users } from "./schema";
import type { NewUserInfo, User } from "./types";

const myFakeUser: User = {
    id: 123,
    username: "jchanes04",
    bio: null,
    createdAt: new Date()
};

const myNewUser: NewUserInfo = {
    username: "new_user"
};

await db.insert(users).values(myNewUser);

console.log(await db.query.users.findMany())