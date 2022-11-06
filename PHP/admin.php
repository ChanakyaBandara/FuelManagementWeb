<?php 

	require 'dbconnect.php';

	if(isset($_POST['loadStation'])) {
		$db = new DbConnect;
		if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
		$stmt = $conn->prepare("SELECT * FROM `station`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
		}
	}

	if(isset($_POST['loadCustomer'])) {
		$db = new DbConnect;
		if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
		$stmt = $conn->prepare("SELECT * FROM `customer`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
		}
	}

	if(isset($_POST['loadVehicle'])) {
		$db = new DbConnect;
		if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
		$stmt = $conn->prepare("SELECT `vehicle`.*,`customer`.`name`,`vehicle_type`.`type`,`fuel_type`.`fuel` FROM `vehicle`,`vehicle_type`,`customer`,`fuel_type` WHERE `vehicle`.`vtid`=`vehicle_type`.`vtid` AND `vehicle`.`cid`=`customer`.`cid` AND `vehicle`.`fid`=`fuel_type`.`fid`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
		}
	}

	if(isset($_POST['loadExtends'])) {
		$db = new DbConnect;
		if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
		$stmt = $conn->prepare("SELECT `extends`.*,`customer`.`name`,`vehicle`.`reg_no`,`vehicle_type`.`type`,`fuel_type`.`fuel` FROM `extends`,`vehicle`,`customer`,`vehicle_type`,`fuel_type` WHERE `extends`.`vid`=`vehicle`.`vid` AND `vehicle`.`vtid`=`vehicle_type`.`vtid` AND `vehicle`.`cid`=`customer`.`cid` AND `vehicle`.`fid`=`fuel_type`.`fid`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
		}
	}

	if(isset($_POST['loadSPQR'])) {
		$db = new DbConnect;
		if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
		$stmt = $conn->prepare("SELECT `special_qr`.*,`customer`.`name` FROM `special_qr`,`customer` WHERE `special_qr`.`cid`=`customer`.`cid`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
		}
	}
	if(isset($_POST['loadStationById'])) {
		$db = new DbConnect;
		if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
		$stmt = $conn->prepare("SELECT * FROM `station` WHERE `sid` = ".$_POST['loadStationById']." ;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
		}
	}
	
?>