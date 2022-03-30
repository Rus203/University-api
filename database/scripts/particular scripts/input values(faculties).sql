USE university;
INSERT INTO faculties(name, phone_number) VALUES('FITR', '+34444433'); 
INSERT INTO faculties(name, phone_number) VALUES('FPT', '+5111111111111');

INSERT INTO `groups`(name, faculty_id) VALUES('IT-9', '1');
INSERT INTO `groups`(name, faculty_id) VALUES('IT-8', '1');

INSERT INTO users(`name`, phone_number, surname, login, `password`) VALUES ('I', '2345333', 'also I', 'admin', 'test_password'); 
INSERT INTO users_roles(user_id, role_id) VALUES (1, 2); 