USE AuthorResearchDB;


-- AI generated data.....


INSERT INTO authors (author_name, university, date_of_birth, h_index, gender, mentor)
VALUES
('John Doe', 'University of Oxford', '1980-05-10', 25, 'Male', NULL),
('Jane Smith', 'Harvard University', '1985-07-20', 30, 'Female', NULL),
('Michael Johnson', 'Stanford University', '1978-11-03', 40, 'Male', 1),
('Emily Davis', 'University of Cambridge', '1990-02-15', 20, 'Female', 2),
('James Brown', 'MIT', '1983-03-22', 35, 'Male', 1),
('Patricia Garcia', 'University of California, Berkeley', '1987-04-28', 28, 'Female', 3),
('David Lee', 'Yale University', '1982-06-11', 50, 'Male', NULL),
('Linda Martinez', 'California Institute of Technology', '1992-09-14', 18, 'Female', NULL),
('Charles Wilson', 'University of Chicago', '1984-01-05', 33, 'Male', 4),
('Susan Moore', 'Columbia University', '1991-12-02', 19, 'Female', 3),
('Robert Taylor', 'Princeton University', '1989-03-18', 23, 'Male', 5),
('Mary Anderson', 'University of Michigan', '1986-10-06', 37, 'Female', 6),
('William Thomas', 'University of Toronto', '1975-08-25', 45, 'Male', NULL),
('Elizabeth Jackson', 'University of Pennsylvania', '1993-05-30', 21, 'Female', 7),
('Mark Lee', 'Harvard University', '1980-07-25', 42, 'Male', 2);


INSERT INTO research_Papers (paper_title, conference, publish_date)
VALUES
('Deep Learning in AI', 'International AI Conference', '2023-05-12'),
('Machine Learning Applications', 'IEEE Symposium', '2022-10-10'),
('Quantum Computing Basics', 'Quantum Tech Summit', '2024-01-01'),
('AI in Healthcare', 'HealthTech Conference', '2023-07-15'),
('Neural Networks for Image Recognition', 'AI and Vision Expo', '2023-11-18'),
('Data Science and Big Data', 'Data Science World', '2022-03-25'),
('Robotics in Modern Manufacturing', 'Robotics World Conference', '2024-02-10'),
('Blockchain Technology Advances', 'Blockchain Global Summit', '2023-08-04'),
('Cybersecurity in the Digital Age', 'Cybersecurity Summit', '2023-09-11'),
('Artificial Intelligence in Education', 'AI Education Forum', '2023-06-20'),
('Edge Computing for IoT', 'IoT Global Summit', '2023-04-03'),
('Smart Cities and IoT', 'Smart Cities Expo', '2022-12-05'),
('Natural Language Processing Techniques', 'NLP Conference', '2022-07-30'),
('Digital Transformation in Business', 'BusinessTech Conference', '2023-08-29'),
('Autonomous Vehicles and AI', 'AutoTech Expo', '2023-10-15'),
('Human-Computer Interaction', 'HCI International', '2023-01-28'),
('Sustainable Energy Solutions', 'EnergyTech Forum', '2023-11-12'),
('Cloud Computing and Infrastructure', 'Cloud World Expo', '2022-04-14'),
('5G Networks and Future Technology', 'Telecom Summit', '2024-01-17'),
('Big Data Analytics for Business', 'Data Business Summit', '2022-06-24'),
('Internet of Things in Healthcare', 'IoT Health Expo', '2023-02-05'),
('Augmented Reality Applications', 'AR World Expo', '2022-09-19'),
('Digital Marketing and AI', 'Digital Marketing Conference', '2023-03-30'),
('Privacy in Digital Systems', 'Cyber Privacy Conference', '2023-05-05'),
('AI in Financial Services', 'FinTech Conference', '2023-07-22'),
('Quantum Computing and Cryptography', 'Quantum Computing Symposium', '2023-10-01'),
('Cloud AI Technologies', 'Cloud AI Summit', '2024-03-05'),
('Data Privacy in the Cloud', 'Cloud Security Forum', '2023-04-18'),
('AI for Personalized Medicine', 'HealthTech Conference', '2023-06-02'),
('Digital Twins in Manufacturing', 'Smart Manufacturing Expo', '2023-08-10');


INSERT INTO authors_research (author_id, research_id)
VALUES
(1, 1), (1, 2),
(2, 3), (2, 4),
(3, 5), (3, 6),
(4, 7), (4, 8),
(5, 9), (5, 10),
(6, 11), (6, 12),
(7, 13), (7, 14),
(8, 15), (8, 16),
(9, 17), (9, 18),
(10, 19), (10, 20),
(11, 21), (11, 22),
(12, 23), (12, 24),
(13, 25), (13, 26),
(14, 27), (14, 28),
(15, 29), (15, 30);
