-- creating the database 
DROP DATABASE IF EXISTS AuthorResearchDB ; 
CREATE DATABASE AuthorResearchDB;
USE AuthorResearchDB ;
-- adding the author table
CREATE TABLE IF NOT EXISTS authors (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    author_name VARCHAR(100),
    university VARCHAR(100),
    date_of_birth DATE,
    h_index INT,
    gender ENUM('Male', 'Female', 'Other')
);
ALTER TABLE   authors 
ADD COLUMN mentor INT, 
ADD CONSTRAINT fk_mentor FOREIGN KEY (mentor) REFERENCES authors(author_id);


