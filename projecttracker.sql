-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2019 at 01:08 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projecttracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmpID` varchar(20) NOT NULL,
  `EmpName` varchar(100) NOT NULL,
  `PhoneNumber` varchar(12) NOT NULL,
  `EmpEmailID` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `Role` varchar(50) NOT NULL,
  `Designation` varchar(50) NOT NULL,
  `Team` varchar(50) NOT NULL,
  `ReportingTo` varchar(100) NOT NULL,
  `Active` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmpID`, `EmpName`, `PhoneNumber`, `EmpEmailID`, `password`, `Role`, `Designation`, `Team`, `ReportingTo`, `Active`) VALUES
('HCI_001', 'Gandhi Sakthi', '9999999999', 'sakthi@idp.com', 'sakthi', 'Lead', 'Senior Manager', 'HTML', 'Self', 'Yes'),
('HCI_669', 'Sivaprakash D', '770886870', 'sivaprakash.d@idp.com', 'shiva', 'Employee', 'Web Developer', 'HTML', 'HCI_001', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `ProjectId` int(10) NOT NULL,
  `ProjectTitle` varchar(100) NOT NULL,
  `ProjectAssignedTo` varchar(255) NOT NULL,
  `ProjectStatus` varchar(50) NOT NULL,
  `ProjectPriority` varchar(12) NOT NULL,
  `ProjectCreatedBy` varchar(100) NOT NULL,
  `ProjectTakenTime` varchar(20) NOT NULL,
  `ProjectEstimatedFinishDate` varchar(20) NOT NULL,
  `ProjectFinishedDate` varchar(20) NOT NULL,
  `ProjectDescription` varchar(500) NOT NULL,
  `ProjectRef` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`ProjectId`, `ProjectTitle`, `ProjectAssignedTo`, `ProjectStatus`, `ProjectPriority`, `ProjectCreatedBy`, `ProjectTakenTime`, `ProjectEstimatedFinishDate`, `ProjectFinishedDate`, `ProjectDescription`, `ProjectRef`) VALUES
(6, 'Extract Transcription form Video', 'sivaprakash@idp.com', 'Completed', 'P1', 'HCI_001', '26/2/2019', '26/2/2019', '26/2/2019', 'Extract Transcription form Vidoe', 'https://aws.amazon.com/transcribe/'),
(7, 'Drag and Drop', 'sivaprakash@idp.com', 'Pending', 'p2', 'HCI_001', '22/2/2019', '22/2/2019', '', 'Drag and Drop experiment which is going to used by CC care team mainly', 'Check the HTML5 drag and drop functionality '),
(8, 'Extract Transcription form Video', 'sivaprakash@idp.com', 'Completed', 'P1', 'HCI_001', '20/2/2019', '26/2/2019', '26/2/2019', 'Extract Transcription form Vidoe', 'https://aws.amazon.com/transcribe/'),
(9, 'Extract Transcription form Video', 'sivaprakash@idp.com', 'Pending', 'P1', 'HCI_001', '', '26/2/2019', '', 'Extract Transcription form Vidoe', 'https://aws.amazon.com/transcribe/');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmpID`),
  ADD UNIQUE KEY `EmpEmailID` (`EmpEmailID`),
  ADD UNIQUE KEY `PhoneNumber` (`PhoneNumber`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`ProjectId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `ProjectId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
