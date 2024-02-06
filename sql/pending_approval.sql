    DROP TABLE IF EXISTS `pending_approval`;
    CREATE TABLE `pending_approval` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `paperId` varchar(255) NOT NULL,
    `studentId` varchar(255) NOT NULL,
    `answer` longtext DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

