DROP TABLE IF EXISTS `single_choice`;
CREATE TABLE `single_choice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) NOT NULL,
  `stem` varchar(255) NOT NULL,
  `selectA` varchar(255) ,
  `selectB` varchar(255) ,
  `selectC` varchar(255) ,
  `selectD` varchar(255) ,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `single_choice` VALUES ('1','math','1+1', '1', '2', '3','4');