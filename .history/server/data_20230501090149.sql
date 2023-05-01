CREATE DATABASE todoapp;

CREATE TABLE todos ( id VARCHAR(255) PRIMARY KEY, user_email VARCHAR(255), title VARCHAR(30), progress INT, date VARCHAR(300) );

CREATE TABLE users ( email VARCHAR(255) PRIMARY KEY, hashed_password VARCHAR(255) )
INSERT INTO todos (id, user_email, title, progress, date) VALUES (0, 'test@test.com', 'First todo', 10, 'Mon May 01 2023 09:01:39 GMT-0600 (Mountain Daylight Time)')