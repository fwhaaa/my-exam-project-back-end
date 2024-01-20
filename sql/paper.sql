DROP TABLE IF EXISTS `paper`;
CREATE TABLE `paper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) DEFAULT NULL,
  `papername` varchar(255) NOT NULL,
  `singlescore` varchar(255) DEFAULT NULL,
  `multiplescore` varchar(255) DEFAULT NULL,
  `judgescore` varchar(255) DEFAULT NULL,
  `saqscore` varchar(255) DEFAULT NULL,
  `questioncontent` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;