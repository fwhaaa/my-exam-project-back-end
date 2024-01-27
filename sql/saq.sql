DROP TABLE IF EXISTS `saq`;
CREATE TABLE `saq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) NOT NULL,
  `stem` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `saq` VALUES ('1','math', '1+4=3');