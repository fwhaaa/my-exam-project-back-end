DROP TABLE IF EXISTS ` multiple_choice`;
CREATE TABLE ` multiple_choice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stem` varchar(255) DEFAULT NULL,
  `selectA` varchar(255) NOT NULL,
  `selectB` varchar(255) DEFAULT NULL,
  `selectC` varchar(255) DEFAULT NULL,
  `selectD` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `multiple_choice` VALUES ('1', '1+4', '12', '5', '3','5');