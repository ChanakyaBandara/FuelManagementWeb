-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2022 at 12:21 PM
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
-- Table structure for table `cancel_request`
--

CREATE TABLE `cancel_request` (
  `CRID` int(11) NOT NULL,
  `RID` int(11) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
  `reason` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE `complaint` (
  `COID` int(11) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
  `note` varchar(255) NOT NULL,
  `cid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `vid` int(11) NOT NULL,
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
  `timestamp` varchar(20) NOT NULL,
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
(2, 'Super Petrol'),
(3, 'Diesel'),
(4, 'Super Diesel');

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

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `rid` int(11) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
  `vid` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `fid` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `special_qr`
--

CREATE TABLE `special_qr` (
  `sqr_id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `purpose` varchar(255) NOT NULL,
  `fid` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `used` int(11) NOT NULL DEFAULT 0,
  `approval` tinyint(1) NOT NULL,
  `ref` varchar(255) NOT NULL,
  `qr_code` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sp_record`
--

CREATE TABLE `sp_record` (
  `SPRID` int(11) NOT NULL,
  `SPID` int(11) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
  `sid` int(11) NOT NULL,
  `amount` int(11) NOT NULL
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
  `opn_cls_status` varchar(255) NOT NULL,
  `queue_status` varchar(255) NOT NULL,
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
  `available_amount` int(11) NOT NULL,
  `capacity` int(11) NOT NULL DEFAULT 10000
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
(2, 'Car/Van/Pickup', '', 20),
(3, 'Bus/Lorry', '', 40),
(4, 'Three Wheel', '', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cancel_request`
--
ALTER TABLE `cancel_request`
  ADD PRIMARY KEY (`CRID`),
  ADD KEY `RID` (`RID`);

--
-- Indexes for table `complaint`
--
ALTER TABLE `complaint`
  ADD PRIMARY KEY (`COID`),
  ADD KEY `cid` (`cid`);

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
  ADD KEY `vid` (`vid`);

--
-- Indexes for table `fuel_arrival`
--
ALTER TABLE `fuel_arrival`
  ADD PRIMARY KEY (`fa_id`),
  ADD KEY `sid` (`sid`),
  ADD KEY `ft_id` (`ft_id`);

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
  ADD KEY `vid` (`vid`),
  ADD KEY `fid` (`fid`);

--
-- Indexes for table `special_qr`
--
ALTER TABLE `special_qr`
  ADD PRIMARY KEY (`sqr_id`),
  ADD UNIQUE KEY `cid` (`cid`),
  ADD KEY `fid` (`fid`);

--
-- Indexes for table `sp_record`
--
ALTER TABLE `sp_record`
  ADD PRIMARY KEY (`SPRID`),
  ADD KEY `SPID` (`SPID`);

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
  ADD UNIQUE KEY `sid` (`sid`,`fid`),
  ADD KEY `fid` (`fid`);

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
-- AUTO_INCREMENT for table `cancel_request`
--
ALTER TABLE `cancel_request`
  MODIFY `CRID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `complaint`
--
ALTER TABLE `complaint`
  MODIFY `COID` int(11) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT for table `fuel_arrival`
--
ALTER TABLE `fuel_arrival`
  MODIFY `fa_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fuel_type`
--
ALTER TABLE `fuel_type`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT for table `sp_record`
--
ALTER TABLE `sp_record`
  MODIFY `SPRID` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `vtid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cancel_request`
--
ALTER TABLE `cancel_request`
  ADD CONSTRAINT `cancel_request_ibfk_1` FOREIGN KEY (`RID`) REFERENCES `record` (`rid`);

--
-- Constraints for table `complaint`
--
ALTER TABLE `complaint`
  ADD CONSTRAINT `complaint_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`);

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`lid`) REFERENCES `login` (`lid`);

--
-- Constraints for table `extends`
--
ALTER TABLE `extends`
  ADD CONSTRAINT `extends_ibfk_1` FOREIGN KEY (`vid`) REFERENCES `vehicle` (`vid`);

--
-- Constraints for table `fuel_arrival`
--
ALTER TABLE `fuel_arrival`
  ADD CONSTRAINT `fuel_arrival_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `station` (`sid`),
  ADD CONSTRAINT `fuel_arrival_ibfk_2` FOREIGN KEY (`ft_id`) REFERENCES `fuel_type` (`fid`);

--
-- Constraints for table `record`
--
ALTER TABLE `record`
  ADD CONSTRAINT `record_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `station` (`sid`),
  ADD CONSTRAINT `record_ibfk_2` FOREIGN KEY (`vid`) REFERENCES `vehicle` (`vid`),
  ADD CONSTRAINT `record_ibfk_3` FOREIGN KEY (`fid`) REFERENCES `fuel_type` (`fid`);

--
-- Constraints for table `special_qr`
--
ALTER TABLE `special_qr`
  ADD CONSTRAINT `special_qr_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`),
  ADD CONSTRAINT `special_qr_ibfk_2` FOREIGN KEY (`fid`) REFERENCES `fuel_type` (`fid`);

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
