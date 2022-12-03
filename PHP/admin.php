<?php

require 'dbconnect.php';

class FuelStat
{
	// Properties
	public $week;
	public $petrol;
	public $superPetrol;
	public $diesel;
	public $superDiesel;

	// Methods
	function set_week($week)
	{
		$this->week = $week;
	}
	function get_week()
	{
		return $this->week;
	}
	function set_petrol($petrol)
	{
		$this->petrol = $petrol;
	}
	function get_petrol()
	{
		return $this->petrol;
	}
	function set_superPetrol($superPetrol)
	{
		$this->superPetrol = $superPetrol;
	}
	function get_superPetrol()
	{
		return $this->superPetrol;
	}
	function set_diesel($diesel)
	{
		$this->diesel = $diesel;
	}
	function get_diesel()
	{
		return $this->diesel;
	}
	function set_superDiesel($superDiesel)
	{
		$this->superDiesel = $superDiesel;
	}
	function get_superDiesel()
	{
		return $this->superDiesel;
	}
}

if (isset($_POST['loadStation'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT * FROM `station`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['loadCustomer'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT * FROM `customer`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['loadVehicle'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT `vehicle`.*,`customer`.`name`,`vehicle_type`.`type`,`fuel_type`.`fuel` FROM `vehicle`,`vehicle_type`,`customer`,`fuel_type` WHERE `vehicle`.`vtid`=`vehicle_type`.`vtid` AND `vehicle`.`cid`=`customer`.`cid` AND `vehicle`.`fid`=`fuel_type`.`fid`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['loadExtends'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT `extends`.*,`customer`.`name`,`vehicle`.`reg_no`,`vehicle_type`.`type`,`fuel_type`.`fuel` FROM `extends`,`vehicle`,`customer`,`vehicle_type`,`fuel_type` WHERE `extends`.`vid`=`vehicle`.`vid` AND `vehicle`.`vtid`=`vehicle_type`.`vtid` AND `vehicle`.`cid`=`customer`.`cid` AND `vehicle`.`fid`=`fuel_type`.`fid`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['loadSPQR'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT `special_qr`.*,`customer`.`name` FROM `special_qr`,`customer` WHERE `special_qr`.`cid`=`customer`.`cid` AND `special_qr`.`status`!=1;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}
if (isset($_POST['loadStationById'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT * FROM `station` WHERE `sid` = " . $_POST['loadStationById'] . " ;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['loadCustomerdetails'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT * FROM `customer` WHERE `cid` = " . $_POST['loadCustomerdetails'] . " ;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['loadVehicledetails'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT `vehicle`.*,`customer`.`name`,`vehicle_type`.`type`,`fuel_type`.`fuel` FROM `vehicle`,`vehicle_type`,`customer`,`fuel_type` WHERE `vehicle`.`vtid`=`vehicle_type`.`vtid` AND `vehicle`.`cid`=`customer`.`cid` AND `vehicle`.`fid`=`fuel_type`.`fid` AND `vehicle`.`vid` = " . $_POST['loadVehicledetails'] . ";");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['loadfulequota'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT * FROM `vehicle_type` ;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['UpdateQuota'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT * FROM `vehicle_type` ;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['loadComplaints'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT `complaint`.*,`customer`.`name` FROM `complaint`,`customer` WHERE `complaint`.`cid`=`customer`.`cid`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['loadBowserArrivals'])) {
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("SELECT `fuel_arrival`.*,`station`.`name`,`fuel_type`.`fuel` FROM `fuel_arrival`,`fuel_type`,`station` WHERE `fuel_arrival`.`ft_id`=`fuel_type`.`fid` AND `fuel_arrival`.`sid`=`station`.`sid`;");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
}

if (isset($_POST['updateBowserArrivals'])) {
	$fa_id = $_POST['updateBowserArrivals'];
	$status = $_POST['status'];
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("UPDATE `fuel_arrival` SET `status`='$status' WHERE `fa_id`='$fa_id';");
		$stmt->execute();
		$myObj3 = new \stdClass();
		$myObj3->Status = "1";
		$myJSON3 = json_encode($myObj3);
		echo "$myJSON3";
	}
}

if (isset($_POST['updatespecialQR'])) {
	$sqr_id = $_POST['updatespecialQR'];
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("UPDATE `special_qr` SET `approval`=1 WHERE `sqr_id`='$sqr_id';");
		$stmt->execute();
		$myObj3 = new \stdClass();
		$myObj3->Status = "1";
		$myJSON3 = json_encode($myObj3);
		echo "$myJSON3";
	}
}

if (isset($_POST['updateExtend'])) {
	$eid = $_POST['updateExtend'];
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$stmt = $conn->prepare("UPDATE `extends` SET `approval`=1 WHERE `eid`='$eid';");
		$stmt->execute();
		$myObj3 = new \stdClass();
		$myObj3->Status = "1";
		$myJSON3 = json_encode($myObj3);
		echo "$myJSON3";
	}
}

if (isset($_POST['vtid_1'], $_POST['vtid_2'], $_POST['vtid_3'], $_POST['vtid_4'])) {
	$vtid_1 = $_POST['vtid_1'];
	$vtid_2 = $_POST['vtid_2'];
	$vtid_3 = $_POST['vtid_3'];
	$vtid_4 = $_POST['vtid_4'];
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$sql = "UPDATE `vehicle_type` SET `allowed_quota`=$vtid_1 WHERE `vtid`=1 ;";
		$sql .= "UPDATE `vehicle_type` SET `allowed_quota`=$vtid_2 WHERE `vtid`=2 ;";
		$sql .= "UPDATE `vehicle_type` SET `allowed_quota`=$vtid_3 WHERE `vtid`=3 ;";
		$sql .= "UPDATE `vehicle_type` SET `allowed_quota`=$vtid_4 WHERE `vtid`=4 ;";
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$myObj3 = new \stdClass();
		$myObj3->Status = "1";
		$myJSON3 = json_encode($myObj3);
		echo "$myJSON3";
	}
}


if (isset($_POST['getReportStat'])) {
	$fuelStatMap = array();
	$db = new DbConnect;
	if (!$conn = $db->connect()) {
		echo "SQL Error";
		exit();
	} else {
		$sql1 = "SELECT week(`record`.`timestamp`) AS Week, COALESCE(SUM(amount),0) as total_amount FROM `record` WHERE `record`.`fid`=1 GROUP BY week(`record`.`timestamp`);";
		$sql2 = "SELECT week(`record`.`timestamp`) AS Week, COALESCE(SUM(amount),0) as total_amount FROM `record` WHERE `record`.`fid`=2 GROUP BY week(`record`.`timestamp`);";
		$sql3 = "SELECT week(`record`.`timestamp`) AS Week, COALESCE(SUM(amount),0) as total_amount FROM `record` WHERE `record`.`fid`=3 GROUP BY week(`record`.`timestamp`);";
		$sql4 = "SELECT week(`record`.`timestamp`) AS Week, COALESCE(SUM(amount),0) as total_amount FROM `record` WHERE `record`.`fid`=4 GROUP BY week(`record`.`timestamp`);";


		$stmt = $conn->prepare($sql1);
		$stmt->execute();

		if ($result = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
			foreach ($result as $row) {
				if (array_key_exists($row['Week'], $fuelStatMap)) {
					$fuelStat = $fuelStatMap[$row['Week']];
					$fuelStat->set_petrol($row['total_amount']);
					$fuelStatMap[$row['Week']] = $fuelStat;
				} else {
					$fuelStat = new FuelStat();
					$fuelStat->set_week($row['Week']);
					$fuelStat->set_petrol($row['total_amount']);
					$fuelStatMap[$row['Week']] = $fuelStat;
				}
			}
		}

		$stmt = $conn->prepare($sql2);
		$stmt->execute();

		if ($result = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
			foreach ($result as $row) {
				if (array_key_exists($row['Week'], $fuelStatMap)) {
					$fuelStat = $fuelStatMap[$row['Week']];
					$fuelStat->set_superPetrol($row['total_amount']);
					$fuelStatMap[$row['Week']] = $fuelStat;
				} else {
					$fuelStat = new FuelStat();
					$fuelStat->set_week($row['Week']);
					$fuelStat->set_superPetrol($row['total_amount']);
					$fuelStatMap[$row['Week']] = $fuelStat;
				}
			}
		}

		$stmt = $conn->prepare($sql3);
		$stmt->execute();

		if ($result = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
			foreach ($result as $row) {
				if (array_key_exists($row['Week'], $fuelStatMap)) {
					$fuelStat = $fuelStatMap[$row['Week']];
					$fuelStat->set_diesel($row['total_amount']);
					$fuelStatMap[$row['Week']] = $fuelStat;
				} else {
					$fuelStat = new FuelStat();
					$fuelStat->set_week($row['Week']);
					$fuelStat->set_diesel($row['total_amount']);
					$fuelStatMap[$row['Week']] = $fuelStat;
				}
			}
		}

		$stmt = $conn->prepare($sql4);
		$stmt->execute();

		if ($result = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
			foreach ($result as $row) {
				if (array_key_exists($row['Week'], $fuelStatMap)) {
					$fuelStat = $fuelStatMap[$row['Week']];
					$fuelStat->set_superDiesel($row['total_amount']);
					$fuelStatMap[$row['Week']] = $fuelStat;
				} else {
					$fuelStat = new FuelStat();
					$fuelStat->set_week($row['Week']);
					$fuelStat->set_superDiesel($row['total_amount']);
					$fuelStatMap[$row['Week']] = $fuelStat;
				}
			}
		}
		
		$myJSON3=array();
		foreach ($fuelStatMap as $key => $value) {
			array_push($myJSON3,$value);
		}

		$myJSON3 = json_encode($myJSON3);
		echo "$myJSON3";
	}
}

?>