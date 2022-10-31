-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2022 at 03:04 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fuel_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nic` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `lid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `extends`
--

CREATE TABLE `extends` (
  `eid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `week` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `ref` varchar(255) NOT NULL,
  `approval` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fuel_arrival`
--

CREATE TABLE `fuel_arrival` (
  `fa_id` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `ft_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `timestamp` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fuel_type`
--

CREATE TABLE `fuel_type` (
  `fid` int(11) NOT NULL,
  `fuel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fuel_type`
--

INSERT INTO `fuel_type` (`fid`, `fuel`) VALUES
(1, 'Petrol'),
(2, 'Diesel');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `lid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`lid`, `username`, `password`, `type`) VALUES
(1, 'testcus@gmail.com', '$2y$10$ECLxBz3sVc5Nurm8IJZefu1ob5bD5WYnGJx4bViUDpgSP4BZbivsS', 2),
(2, 'testfuel@gmail.com', '$2y$10$ECLxBz3sVc5Nurm8IJZefu1ob5bD5WYnGJx4bViUDpgSP4BZbivsS', 3),
(3, 'testcus2@gmail.com', '$2y$10$5n7dCsnPJ/Pva7DPB72xkuhf0UAnRmdL8MM0jLroDNlefeSslBbl.', 2),
(4, 'testfuel2@gmail.com', '$2y$10$czG5Df96qzGLwCN9BMixu.f3ayTGyg7/TbAvL/PKsd9IE.qOeDeeu', 3),
(6, 'risiki@gmail.com', '$2y$10$f7EN2QTc8.35SLmcQ7Nha.nC4uBomvmMrnpekopydMsreqNo0LBhC', 3);

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `rid` int(11) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
  `vid` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `special_qr`
--

CREATE TABLE `special_qr` (
  `sqr_id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `qr` int(11) NOT NULL,
  `purpose` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `approval` tinyint(1) NOT NULL,
  `ref` varchar(255) NOT NULL,
  `qr_code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `station`
--

CREATE TABLE `station` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `reg_no` varchar(255) NOT NULL,
  `city` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lon` varchar(255) NOT NULL,
  `lid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `stid` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `fid` int(11) NOT NULL,
  `available_amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `vid` int(11) NOT NULL,
  `reg_no` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `engine_no` varchar(255) NOT NULL,
  `chassis_no` varchar(255) NOT NULL,
  `qr` varchar(255) NOT NULL,
  `vtid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `fid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_type`
--

CREATE TABLE `vehicle_type` (
  `vtid` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `allowed_quota` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle_type`
--

INSERT INTO `vehicle_type` (`vtid`, `type`, `description`, `allowed_quota`) VALUES
(1, 'Bike', '', 4),
(2, 'Car', '', 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cid`),
  ADD KEY `lid` (`lid`);

--
-- Indexes for table `extends`
--
ALTER TABLE `extends`
  ADD PRIMARY KEY (`eid`),
  ADD KEY `cid` (`cid`);

--
-- Indexes for table `fuel_type`
--
ALTER TABLE `fuel_type`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`rid`),
  ADD KEY `sid` (`sid`),
  ADD KEY `vid` (`vid`);

--
-- Indexes for table `special_qr`
--
ALTER TABLE `special_qr`
  ADD PRIMARY KEY (`sqr_id`),
  ADD KEY `cid` (`cid`);

--
-- Indexes for table `station`
--
ALTER TABLE `station`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `lid` (`lid`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`stid`),
  ADD KEY `fid` (`fid`),
  ADD KEY `sid` (`sid`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`vid`),
  ADD KEY `cid` (`cid`),
  ADD KEY `vehicle_ibfk_2` (`vtid`),
  ADD KEY `fid` (`fid`);

--
-- Indexes for table `vehicle_type`
--
ALTER TABLE `vehicle_type`
  ADD PRIMARY KEY (`vtid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `extends`
--
ALTER TABLE `extends`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fuel_type`
--
ALTER TABLE `fuel_type`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `record`
--
ALTER TABLE `record`
  MODIFY `rid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `special_qr`
--
ALTER TABLE `special_qr`
  MODIFY `sqr_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `station`
--
ALTER TABLE `station`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `stid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `vid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_type`
--
ALTER TABLE `vehicle_type`
  MODIFY `vtid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`lid`) REFERENCES `login` (`lid`);

--
-- Constraints for table `extends`
--
ALTER TABLE `extends`
  ADD CONSTRAINT `extends_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`);

--
-- Constraints for table `record`
--
ALTER TABLE `record`
  ADD CONSTRAINT `record_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `station` (`sid`),
  ADD CONSTRAINT `record_ibfk_2` FOREIGN KEY (`vid`) REFERENCES `vehicle` (`vid`);

--
-- Constraints for table `special_qr`
--
ALTER TABLE `special_qr`
  ADD CONSTRAINT `special_qr_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`);

--
-- Constraints for table `station`
--
ALTER TABLE `station`
  ADD CONSTRAINT `station_ibfk_1` FOREIGN KEY (`lid`) REFERENCES `login` (`lid`);

--
-- Constraints for table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`fid`) REFERENCES `fuel_type` (`fid`),
  ADD CONSTRAINT `stock_ibfk_2` FOREIGN KEY (`sid`) REFERENCES `station` (`sid`);

--
-- Constraints for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`),
  ADD CONSTRAINT `vehicle_ibfk_2` FOREIGN KEY (`vtid`) REFERENCES `vehicle_type` (`vtid`),
  ADD CONSTRAINT `vehicle_ibfk_3` FOREIGN KEY (`fid`) REFERENCES `fuel_type` (`fid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
