
-- Database creation
DROP DATABASE IF EXISTS `semanticweb`;
CREATE DATABASE `semanticweb`;


-- Tables creation
CREATE TABLE `semanticweb`.`tcoach` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `initial_date` DATE NOT NULL , `final_date` DATE NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE `semanticweb`.`ttitle` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL ,  `date` DATE NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;


-- Inserts
INSERT INTO `ttitle`(`name`, `date`) VALUES ("European Cup", "1974-05-17");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("European Cup", "1975-05-28");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("European Cup", "1976-05-12");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("UEFA Champions League", "2001-05-23");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("UEFA Champions League", "2013-05-25");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("UEFA Champions League", "2020-08-23");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1932-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1969-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1972-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1973-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1974-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1980-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1981-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1985-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1986-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1987-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1989-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1990-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1994-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1997-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "1999-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2000-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2001-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2003-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2005-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2006-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2008-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2010-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2013-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2014-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2015-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2016-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2017-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2018-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2019-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("Bundesliga", "2020-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "1957-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "1966-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "1967-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "1969-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "1971-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "1982-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "1984-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "1986-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "1998-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2000-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2003-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2005-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2006-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2008-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2010-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2013-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2014-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2016-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2019-06-01");
INSERT INTO `ttitle`(`name`, `date`) VALUES ("DFB Pokal", "2020-06-01");