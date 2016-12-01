DROP TABLE if EXISTS users;
DROP TABLE if EXISTS emails;
DROP TABLE if EXISTS saved;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password_digest VARCHAR(255)
);


CREATE TABLE saved(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
);


CREATE TABLE emails(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL
);



INSERT INTO users (email, password_digest) VALUES ('danielle12hoven@gmail.com', '1111');
INSERT INTO emails (name, email, message) VALUES ('Danielle', 'danielle12hoven@yahoo.com', 'hello');
INSERT INTO saved (name) VALUES ('Purple Rain');
