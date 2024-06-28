CREATE TABLE `inventory` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`quantity` integer NOT NULL,
	`price` integer NOT NULL,
	`description` text NOT NULL,
	`category` text NOT NULL
);
