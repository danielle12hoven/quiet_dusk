DROP TABLE if EXISTS messages;

CREATE TABLE messages(
    id SERIAL PRIMARY KEY,
    phrase VARCHAR NOT NULL,
    name VARCHAR(200) NOT NULL
);

INSERT INTO messages (phrase, name) VALUES ('Whats up!', 'joe');
INSERT INTO messages (phrase) VALUES ('dsfokj');
INSERT INTO messages (phrase) VALUES ('lkjdsd sdflkj');
INSERT INTO messages (phrase) VALUES ('Which is good');
