-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `single_choice`;
CREATE TABLE `single_choice` (
  `questionId` varchar(255) NOT NULL,
  `stem` varchar(255) DEFAULT NULL,
  `selectA` varchar(255) NOT NULL,
  `selectB` varchar(11) DEFAULT NULL,
  `selectC` varchar(11) DEFAULT NULL,
  `selectD` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`questionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `single_choice` VALUES ('1', '1+1', '1', '2', '3','4');