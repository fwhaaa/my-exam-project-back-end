-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `single_choice`;
CREATE TABLE `single_choice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stem` varchar(255) DEFAULT NULL,
  `selectA` varchar(255) NOT NULL,
  `selectB` varchar(255) DEFAULT NULL,
  `selectC` varchar(255) DEFAULT NULL,
  `selectD` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `single_choice` VALUES ('1', '1+1', '1', '2', '3','4');