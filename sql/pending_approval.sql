    DROP TABLE IF EXISTS `pending_approval`;
    CREATE TABLE `pending_approval` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `examId`varchar(255) NOT NULL,
    `paperId` varchar(255) NOT NULL,
    `studentId` varchar(255) NOT NULL,
    `answer` longtext DEFAULT NULL,
    `score` number DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

