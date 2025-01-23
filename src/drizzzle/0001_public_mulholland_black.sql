ALTER TABLE `comments` DROP FOREIGN KEY `comments_userId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `comments` DROP FOREIGN KEY `comments_postId_posts_id_fk`;
--> statement-breakpoint
ALTER TABLE `posts` DROP FOREIGN KEY `posts_userId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `comments` ADD CONSTRAINT `comments_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `comments` ADD CONSTRAINT `comments_postId_posts_id_fk` FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `posts` ADD CONSTRAINT `posts_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;