DROP TABLE if EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    phrase VARCHAR NOT NULL,
    name VARCHAR(200) NOT NULL
);

INSERT INTO users (phrase, name) VALUES ('Whats up!', 'joe');
INSERT INTO users (phrase) VALUES ('dsfokj');
INSERT INTO users (phrase) VALUES ('lkjdsd sdflkj');
INSERT INTO users (phrase) VALUES ('Which is good');
