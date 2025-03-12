DROP DATABASE IF EXISTS meetup; 
CREATE DATABASE meetup;
use meetup;


CREATE TABLE Invitee (
    invitee_no INT AUTO_INCREMENT PRIMARY KEY,
    invitee_name VARCHAR(100),
    invited_by VARCHAR(100)
);

CREATE TABLE Room (
    room_no INT AUTO_INCREMENT PRIMARY KEY,
    room_name VARCHAR(100),
    floor_number INT
);

CREATE TABLE Meeting (
    meeting_no INT AUTO_INCREMENT PRIMARY KEY,
    meeting_title VARCHAR(100),
    starting_time DATETIME,
    ending_time DATETIME,
    room_no INT,
    FOREIGN KEY (room_no) REFERENCES Room (room_no)
);

INSERT INTO Invitee (invitee_name, invited_by)
VALUES
    ('Alice Johnson', 'Bob Smith'),
    ('Charlie Brown', 'Alice Johnson'),
    ('David Lee', 'Eve Adams'),
    ('Sophia Martinez', 'John Doe'),
    ('Michael Green', 'Sophia Martinez');

INSERT INTO Room (room_name, floor_number)
VALUES
    ('Conference A', 1),
    ('Board Room', 2),
    ('Training Room', 3),
    ('Meeting Room 101', 1),
    ('Executive Suite', 5);

INSERT INTO Meeting (meeting_title, starting_time, ending_time, room_no)
VALUES
    ('Project Kickoff', '2025-03-11 10:00:00', '2025-03-11 11:30:00', 1),
    ('Quarterly Review', '2025-03-12 14:00:00', '2025-03-12 16:00:00', 2),
    ('Training Session', '2025-03-13 09:00:00', '2025-03-13 12:00:00', 3),
    ('Team Sync-up', '2025-03-14 11:00:00', '2025-03-14 12:00:00', 4),
    ('Board Meeting', '2025-03-15 15:00:00', '2025-03-15 17:00:00', 5);
