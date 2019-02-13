-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 13, 2019 at 03:20 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ProjectTracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `Employee`
--

CREATE TABLE `Employee` (
  `EmpID` varchar(20) NOT NULL,
  `EmpName` varchar(100) NOT NULL,
  `PhoneNumber` varchar(12) NOT NULL,
  `EmpEmailID` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `Designation` varchar(50) NOT NULL,
  `Team` varchar(50) NOT NULL,
  `ReportingTo` varchar(100) NOT NULL,
  `Active` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`EmpID`, `EmpName`, `PhoneNumber`, `EmpEmailID`, `password`, `Designation`, `Team`, `ReportingTo`, `Active`) VALUES
('HCI_669', 'Sivaprakash D', '770886870', 'sivaprakash.d@idp.com', 'shiva', 'Web developer', 'HTML', 'HCI_001', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `Project`
--

CREATE TABLE `Project` (
  `ProjectId` varchar(10) NOT NULL,
  `EmpID` int(20) NOT NULL,
  `ProjectTitle` int(12) NOT NULL,
  `ProjectAssignedTo` int(255) NOT NULL,
  `ProjectStatus` int(50) NOT NULL,
  `ProjectPriority` int(12) NOT NULL,
  `ProjectCreatedBy` date NOT NULL,
  `ProjectTakenTime` date NOT NULL,
  `ProjectEstimatedFinishDate` date NOT NULL,
  `ProjectFinishedDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`EmpID`),
  ADD UNIQUE KEY `EmpEmailID` (`EmpEmailID`),
  ADD UNIQUE KEY `PhoneNumber` (`PhoneNumber`);

--
-- Indexes for table `Project`
--
ALTER TABLE `Project`
  ADD PRIMARY KEY (`ProjectId`),
  ADD UNIQUE KEY `EmpID` (`EmpID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
