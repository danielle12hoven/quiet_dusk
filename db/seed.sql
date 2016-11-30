DROP TABLE if EXISTS users;
DROP TABLE if EXISTS saved;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password_digest VARCHAR(255)
);

COPY users
  (id, email, password_digest)
FROM '/Users/danielletwaalfhoven/code/heroku_lab_2/db/seed.sql'
    DELIMITER ',' SQL;



CREATE TABLE saved(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
