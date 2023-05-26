DROP SCHEMA IF EXISTS `context_filters`;
CREATE SCHEMA `context_filters` DEFAULT CHARACTER SET utf8mb4;
USE `context_filters`;

CREATE TABLE IF NOT EXISTS `phones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `storage` VARCHAR(45) NOT NULL,
  `camera` VARCHAR(45) NOT NULL,
  `screen` VARCHAR(45) NOT NULL,
  `operating_system` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role`VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
