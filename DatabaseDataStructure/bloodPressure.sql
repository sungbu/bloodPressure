-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2020-04-08 23:35:53
-- 服务器版本： 5.7.19-log
-- PHP Version: 5.4.45

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bloodPressure`
--

-- --------------------------------------------------------

--
-- 表的结构 `bloodPressure`
--

CREATE TABLE IF NOT EXISTS `bloodPressure` (
  `id` int(11) NOT NULL,
  `lowPressure` int(225) NOT NULL,
  `heightPressure` int(225) NOT NULL,
  `year` int(255) NOT NULL,
  `month` varchar(225) NOT NULL,
  `ctime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `idCard` varchar(225) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `bloodPressure`
--

INSERT INTO `bloodPressure` (`id`, `lowPressure`, `heightPressure`, `year`, `month`, `ctime`, `idCard`) VALUES
(1, 80, 100, 2019, '8', '2019-08-27 13:33:22', 'aaa111'),
(9, 70, 90, 2019, '8', '2019-08-27 13:38:44', 'aaa111'),
(10, 90, 120, 2019, '9', '2019-09-27 13:40:12', 'aaa111'),
(11, 70, 95, 2019, '9', '2019-09-27 13:40:14', 'aaa111'),
(12, 83, 110, 2019, '10', '2019-10-27 13:40:15', 'aaa111'),
(13, 81, 123, 2019, '10', '2019-10-27 13:40:16', 'aaa111'),
(14, 74, 93, 2019, '10', '2019-10-27 13:40:17', 'aaa111'),
(15, 97, 100, 2019, '10', '2019-10-27 13:41:18', 'aaa111'),
(16, 82, 122, 2019, '10', '2019-10-27 13:41:19', 'aaa111'),
(17, 94, 110, 2019, '10', '2019-10-27 13:41:20', 'aaa111'),
(18, 76, 93, 2019, '10', '2019-10-27 13:41:25', 'aaa111'),
(19, 50, 72, 2019, '10', '2019-10-27 15:05:23', 'aaa111'),
(20, 30, 22, 2019, '10', '2019-10-27 15:06:28', 'aaa111'),
(26, 80, 120, 2019, '10', '2019-10-29 01:56:16', 'aaa111'),
(27, 111, 111, 2019, '10', '2019-10-30 12:06:46', 'aaa111'),
(28, 110, 120, 2019, '10', '2019-10-30 14:12:40', 'aaa111'),
(29, 130, 170, 2019, '10', '2019-10-30 14:13:20', 'aaa111'),
(30, 90, 110, 2019, '10', '2019-10-30 14:15:21', 'aaa111'),
(31, 120, 200, 2019, '10', '2019-10-30 14:16:54', 'aaa111'),
(37, 190, 300, 2019, '10', '2019-10-30 14:49:30', 'aaa111'),
(38, 110, 300, 2019, '10', '2019-10-30 14:50:02', 'aaa111'),
(39, 10, 20, 2019, '10', '2019-10-30 14:51:44', 'aaa111'),
(40, 130, 110, 2019, '10', '2019-10-30 14:53:16', 'aaa111'),
(41, 130, 110, 2019, '10', '2019-10-30 14:55:16', 'aaa111'),
(56, 100, 120, 2019, '11', '2019-11-01 12:39:59', 'aaa111'),
(57, 80, 100, 2019, '11', '2019-11-01 12:40:14', 'aaa111'),
(58, 100, 120, 2019, '11', '2019-11-01 12:41:59', 'aaa111'),
(59, 80, 100, 2019, '11', '2019-11-01 12:42:00', 'aaa111'),
(60, 50, 80, 2019, '11', '2019-11-02 04:14:44', 'aaa111'),
(61, 50, 80, 2019, '11', '2019-11-02 04:15:29', 'aaa111'),
(62, 150, 180, 2019, '11', '2019-11-02 04:21:16', 'aaa111'),
(63, 150, 180, 2019, '11', '2019-11-02 04:23:16', 'aaa111'),
(64, 10, 20, 2019, '11', '2019-11-02 05:42:42', 'aaa111'),
(72, 72, 107, 2019, '11', '2019-11-02 07:33:07', 'bbb111'),
(74, 54, 113, 2019, '11', '2019-11-02 07:48:21', 'ccc111'),
(84, 89, 126, 2019, '11', '2019-11-03 02:01:44', 'bbb111'),
(85, 57, 98, 2019, '11', '2019-11-03 02:17:22', 'ccc111'),
(86, 81, 121, 2019, '11', '2019-11-04 00:19:41', 'bbb111'),
(87, 10, 20, 2019, '11', '2019-11-04 12:17:05', 'aaa111'),
(92, 80, 128, 2019, '11', '2019-11-05 00:33:21', 'bbb111'),
(93, 80, 110, 2019, '11', '2019-11-05 02:14:50', 'aaa111'),
(94, 73, 114, 2019, '11', '2019-11-06 00:44:03', 'bbb111'),
(95, 75, 100, 2019, '11', '2019-11-06 11:44:35', 'aaa111'),
(96, 75, 100, 2019, '11', '2019-11-06 11:46:08', 'aaa111'),
(97, 80, 110, 2019, '11', '2019-11-06 13:13:52', 'aaa111'),
(98, 79, 100, 2019, '11', '2019-11-08 04:35:02', 'aaa111'),
(99, 10, 20, 2018, '11', '2019-11-08 05:12:42', 'aaa111'),
(100, 80, 100, 2019, '11', '2019-11-08 09:56:37', '3526'),
(101, 77, 100, 2019, '11', '2019-11-09 10:22:40', 'aaa111'),
(102, 90, 110, 2019, '11', '2019-11-09 10:54:34', 'aaa111'),
(103, 74, 106, 2019, '11', '2019-11-10 00:22:47', 'bbb111'),
(104, 61, 124, 2019, '11', '2019-11-10 03:01:49', 'aaa111'),
(105, 61, 124, 2019, '11', '2019-11-10 03:02:20', 'ccc111'),
(106, 77, 122, 2019, '11', '2019-11-10 22:54:49', 'bbb111'),
(107, 86, 114, 2019, '11', '2019-11-11 22:58:00', 'bbb111'),
(108, 79, 121, 2019, '11', '2019-11-13 00:30:26', 'bbb111'),
(109, 78, 134, 2019, '11', '2019-11-13 22:58:22', 'bbb111'),
(110, 77, 113, 2019, '11', '2019-11-15 00:32:27', 'bbb111'),
(115, 77, 114, 2019, '11', '2019-11-17 00:51:48', 'bbb111'),
(116, 76, 118, 2019, '11', '2019-11-18 00:38:40', 'bbb111'),
(117, 80, 124, 2019, '11', '2019-11-19 00:59:14', 'bbb111'),
(118, 89, 130, 2019, '11', '2019-11-20 00:37:49', 'bbb111'),
(119, 77, 117, 2019, '11', '2019-11-20 23:31:35', 'bbb111'),
(120, 78, 118, 2019, '11', '2019-11-21 23:42:39', 'bbb111'),
(121, 82, 123, 2019, '11', '2019-11-23 00:41:52', 'bbb111'),
(122, 63, 119, 2019, '11', '2019-11-23 04:33:47', 'ccc111'),
(123, 72, 118, 2019, '11', '2019-11-24 01:06:53', 'bbb111'),
(124, 77, 115, 2019, '11', '2019-11-25 00:53:16', 'bbb111'),
(125, 74, 122, 2019, '11', '2019-11-26 00:58:59', 'bbb111'),
(126, 74, 117, 2019, '11', '2019-11-27 02:38:51', 'bbb111'),
(127, 77, 122, 2019, '11', '2019-11-28 00:56:18', 'bbb111'),
(128, 77, 118, 2019, '11', '2019-11-29 00:57:47', 'bbb111'),
(129, 80, 120, 2019, '11', '2019-11-30 01:02:41', 'bbb111'),
(130, 88, 136, 2019, '12', '2019-12-01 22:35:11', 'bbb111'),
(131, 86, 130, 2019, '12', '2019-12-03 09:35:42', 'bbb111'),
(132, 88, 139, 2019, '12', '2019-12-04 13:28:41', 'bbb111'),
(133, 89, 132, 2019, '12', '2019-12-05 00:47:10', 'bbb111'),
(134, 84, 127, 2019, '12', '2019-12-05 23:18:17', 'bbb111'),
(135, 79, 134, 2019, '12', '2019-12-07 00:50:19', 'bbb111'),
(136, 79, 120, 2019, '12', '2019-12-08 00:54:36', 'bbb111'),
(137, 84, 134, 2019, '12', '2019-12-08 23:29:55', 'bbb111'),
(138, 79, 120, 2019, '12', '2019-12-09 23:15:33', 'bbb111'),
(139, 81, 120, 2019, '12', '2019-12-10 23:31:23', 'bbb111'),
(140, 82, 124, 2019, '12', '2019-12-12 00:53:16', 'bbb111'),
(141, 79, 120, 2019, '12', '2019-12-13 01:15:39', 'bbb111'),
(142, 76, 120, 2019, '12', '2019-12-14 13:18:48', 'bbb111'),
(143, 69, 115, 2019, '12', '2019-12-15 13:43:37', 'bbb111');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `headPic` varchar(255) NOT NULL,
  `user` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `idCard` varchar(225) NOT NULL,
  `ctime` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `headPic`, `user`, `password`, `idCard`, `ctime`) VALUES
(1, '//www.gravatar.com/avatar/9a8ad97bf98dc1c6834d49f19607cae6?s=200&r=pg&d=mm', '15116411678', '$2b$10$.w4r3Np5hG3btnzSkXu0RuGXFkM9pUn76uOvsc9UN/4B6fkd7AeEG', 'bbb111', '2019-11-02 06:11:49'),
(2, '//www.gravatar.com/avatar/9a8ad97bf98dc1c6834d49f19607cae6?s=200&r=pg&d=mm', '17680159093', '$2b$10$.w4r3Np5hG3btnzSkXu0RuGXFkM9pUn76uOvsc9UN/4B6fkd7AeEG', 'aaa111', '2019-11-02 06:11:49'),
(3, '//www.gravatar.com/avatar/9a8ad97bf98dc1c6834d49f19607cae6?s=200&r=pg&d=mm', '13875874378', '$2b$10$.w4r3Np5hG3btnzSkXu0RuGXFkM9pUn76uOvsc9UN/4B6fkd7AeEG', 'ccc111', '2019-11-02 07:44:15'),
(26, '//www.gravatar.com/avatar/9a8ad97bf98dc1c6834d49f19607cae6?s=200&r=pg&d=mm', 'Prince', '$2b$10$.w4r3Np5hG3btnzSkXu0RuGXFkM9pUn76uOvsc9UN/4B6fkd7AeEG', '3526', '2019-11-08 09:47:45'),
(28, '//www.gravatar.com/avatar/9a8ad97bf98dc1c6834d49f19607cae6?s=200&r=pg&d=mm', 'sungbu', '$2a$10$GliDxFN6G6Io0zSbZco7..eIZD1yTIqRtQpKM65PAMwTahH/Azl5G', '21486', '2019-11-09 11:39:37'),
(29, '//www.gravatar.com/avatar/a2711d08a158d4d0ebdf524114670dde?s=200&r=pg&d=mm', 'ljc', '$2a$10$L.UcR3M7ZFbIdpv86ufrg.rNCVFUZJLtKk3RoS/UYt2XMYxZfAg42', '20717', '2019-11-09 14:11:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bloodPressure`
--
ALTER TABLE `bloodPressure`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idCard_UNIQUE` (`idCard`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bloodPressure`
--
ALTER TABLE `bloodPressure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=144;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
