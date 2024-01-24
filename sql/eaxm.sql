DROP TABLE IF EXISTS `exam`;
CREATE TABLE `exam` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(255)  NOT NULL,
  `examname` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `paperId`  varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `exam` VALUES ('1','math', '期末数学', '120','1');