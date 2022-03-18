DROP DATABASE IF EXISTS university ; 
CREATE DATABASE university;
USE UNIVERSITY;

DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
  PRIMARY KEY(id),
  id 	          INT            NOT NULL     AUTO_INCREMENT,
  name          VARCHAR(45)    NOT NULL,
  faculty_id	  INT			       NOT NULL
);
 

DROP TABLE IF EXISTS students;
CREATE TABLE students (
  PRIMARY KEY(id),
  id            INT            NOT NULL     AUTO_INCREMENT,
  name          VARCHAR(45)    NOT NULL,
  surname       VARCHAR(45)    NOT NULL,
  phone_number  VARCHAR(20),
  band_id       INT            NOT NULL
);

DROP TABLE IF EXISTS facultets;
CREATE TABLE facultets (
  PRIMARY KEY(id),
  id            INT            NOT NULL     AUTO_INCREMENT,
  name          VARCHAR(45)    NOT NULL,
  phone         VARCHAR(15)
)
  
    
