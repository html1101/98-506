import { db } from "./db";
import { users, posts, comments, userFriends } from "./schema";
import { faker } from "@faker-js/faker";

const USER_COUNT = 50;
const POSTS_PER_USER = 10;
const COMMENTS_PER_POST = 5;
const FRIENDS_PER_USER = 10;

async function main() {
    console.log("Clearing database…");
    db.run("DELETE FROM user_friends");
    db.run("DELETE FROM comments");
    db.run("DELETE FROM posts");
    db.run("DELETE FROM users");

    // --- USERS ---
    console.log("Inserting users…");
    const userIds: number[] = [];
    for (let i = 0; i < USER_COUNT; i++) {
        const result = db
            .insert(users)
            .values({
                username: faker.internet.username(),
                bio: faker.lorem.sentence(),
            })
            .run();
        userIds.push(result.lastInsertRowid as number);
    }

    // --- POSTS ---
    console.log("Inserting posts…");
    const postIds: number[] = [];
    for (const uid of userIds) {
        for (let i = 0; i < POSTS_PER_USER; i++) {
            const result = db
                .insert(posts)
                .values({
                userId: uid,
                title: faker.lorem.words(4),
                body: faker.lorem.paragraph(),
                })
                .run();
            postIds.push(result.lastInsertRowid as number);
        }
    }

    // --- COMMENTS ---
    console.log("Inserting comments…");
    for (const pid of postIds) {
        for (let i = 0; i < COMMENTS_PER_POST; i++) {
            const uid = faker.helpers.arrayElement(userIds);
            db.insert(comments)
                .values({
                postId: pid,
                userId: uid,
                body: faker.lorem.sentence(),
                })
                .run();
        }
    }

    // --- FRIENDSHIPS ---
    console.log("Inserting friend relations…");
    for (const uid of userIds) {
        const friends = faker.helpers.shuffle(userIds.filter((id) => id !== uid))
            .slice(0, FRIENDS_PER_USER);

        for (const fid of friends) {
            // Avoid duplicates or reversed duplicates
            if (uid < fid) {
                db.insert(userFriends)
                .values({
                    userId: uid,
                    friendId: fid,
                })
                .run();
            }
        }
    }

    console.log("Done!");
}

main();
