CREATE TABLE scores (
    score_id SERIAL PRIMARY KEY,
    user_id INTEGER
    REFERENCES users(user_id),
    score INTEGER,
    year INTEGER,
    month INTEGER,
    today INTEGER
)