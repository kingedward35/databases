CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int NOT NULL AUTO_INCREMENT,
  /*date varchar(40),*/
  text varchar(250),
  userid int(7) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  /* Describe your table here.*/
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  ID int NOT NULL AUTO_INCREMENT,
  roomname varchar(20),
  PRIMARY KEY (ID)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

