
-- Database creation
DROP DATABASE IF EXISTS `semanticweb`;
CREATE DATABASE `semanticweb`;

-- Tables creation
CREATE TABLE `semanticweb`.`tcoach` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `initial_date` DATE NOT NULL , `final_date` DATE NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE `semanticweb`.`ttitle` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE `semanticweb`.`tcoach_title` ( `id_coach` INT NOT NULL ,`id_title` INT NOT NULL , `date` DATE NOT NULL , PRIMARY KEY (`id_coach`, `id_title`), CONSTRAINT FK_COACHTITLE_COACH FOREIGN KEY (id_coach) REFERENCES tcoach(id), CONSTRAINT FK_COACHTITLE_TITLE FOREIGN KEY (id_title) REFERENCES ttitle(id) ) ENGINE = InnoDB;