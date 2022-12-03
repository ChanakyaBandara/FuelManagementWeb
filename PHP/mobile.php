<?php
require 'dbconnect.php';

function creat_user($nic, $Password, $type)
{
    $db = new DbConnect;
    $hashed = password_hash($Password, PASSWORD_BCRYPT);
    $sql = "INSERT INTO  `login`( `username`, `password`, `type`) VALUES ('$nic','$hashed',$type)";

    if (!$conn = $db->connect()) {
        echo "SQL Error";
        exit();
    } else {
        $conn->exec($sql);
        $last_id = $conn->lastInsertId();
        return $last_id;
    }
}

function addStartingStocks($SID)
{
    $db = new DbConnect;
    $conn = $db->connect();
    $sql = "INSERT INTO `stock`(`sid`, `fid`, `available_amount`) VALUES ('$SID',1,0),('$SID',2,0),('$SID',3,0),('$SID',4,0)";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
}

function get_stock_sid($SID)
{
    $db = new DbConnect;
    $conn = $db->connect();
    $stmt = $conn->prepare("SELECT `stock`.*,`fuel_type`.`fuel` FROM `stock`,`fuel_type` WHERE `stock`.`fid`=`fuel_type`.`fid` AND `stock`.`sid` ='$SID'");
    $stmt->execute();
    $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (!empty($rec)) {
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    } else {
        addStartingStocks($SID);
        get_stock_sid($SID);
    }
}

function updateFuelStock($fid, $sid, $amount)
{
    $db = new DbConnect;
    $conn = $db->connect();
    $sql = "UPDATE `stock` SET available_amount = available_amount + $amount WHERE `sid`='$sid' AND `fid`='$fid';";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
}

if (isset($_POST['type'])) {

    if ($_POST['type'] == "login") {
        $username = $_POST['Username'];
        $password = $_POST['Password'];
        if (empty($username) || empty($password)) {
            echo "Empty fields";
        } else {
            $sql = "SELECT * FROM `login` WHERE username='$username'";
            $db = new DbConnect;
            if (!$conn = $db->connect()) {
                echo 'SQL Error';
                exit();
            } else {
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $UID = "";
                $type = "";
                $myObj2 = new \stdClass();
                if ($result = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
                    foreach ($result as $rows) {
                        $UID = $rows['lid'];
                        $tempPass = $rows['password'];
                        $type = $rows['type'];
                    }

                    if (password_verify($password, $tempPass)) {
                        $myObj2->Status = "1";
                        $myObj2->LID = $UID;
                        $myObj2->Type = $type;
                    } else {
                        $myObj2->Status = "0";
                    }
                } else {
                    $myObj2->Status = "0";
                    //echo "Invalid Credentials 0";
                }
                $myJSON2 = json_encode($myObj2);
                echo "$myJSON2";
            }

        }
    }

    if ($_POST['type'] == "add_customer") {
        //name email nic age phone gender Password
        $name = $_POST['name'];
        $nic = $_POST['nic'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $Password = $_POST['Password'];


        $LID = creat_user($email, $Password, 2);
        $db = new DbConnect;
        $sql = "INSERT INTO `customer`(`name`, `nic`, `email`, `phone`, `address`, `lid`)  VALUES ('$name','$nic','$email','$phone','$address','$LID');";

        if (!$conn = $db->connect()) {
            echo "SQL Error";
            exit();
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myObj3->LID = $LID;
            $myObj3->Type = 2;
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if ($_POST['type'] == "add_fuel_station") {
        //name email nic age phone gender Password
        $name = $_POST['name'];
        $email = $_POST['email'];
        $reg_no = $_POST['reg_no'];
        $city = $_POST['city'];
        $address = $_POST['address'];
        $phone = $_POST['phone'];
        $lat = $_POST['lat'];
        $lon = $_POST['lon'];
        $Password = $_POST['Password'];


        $LID = creat_user($email, $Password, 3);
        $db = new DbConnect;
        $sql = "INSERT INTO `station`(`name`, `email`, `reg_no`, `city`, `address`, `phone`, `lat`, `lon`, `lid`)  VALUES ('$name','$email','$reg_no',$city,'$address','$phone','$lat','$lon','$LID');";

        if (!$conn = $db->connect()) {
            echo "SQL Error";
            exit();
        } else {
            $conn->exec($sql);
            $last_id = $conn->lastInsertId();
            addStartingStocks($last_id);
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myObj3->LID = $LID;
            $myObj3->Type = 3;
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if ($_POST['type'] == "load_customer_data") {
        $LID = $_POST['LID'];
        if (empty($LID)) {
            echo "Empty fields";
        } else {
            $sql = "SELECT * FROM customer WHERE lid='$LID'";
            $db = new DbConnect;
            if (!$conn = $db->connect()) {
                echo 'SQL Error';
                exit();
            } else {
                $stmt = $conn->prepare($sql);
                $stmt->execute();

                if ($result = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
                    echo json_encode($result[0]);
                }
            }
        }
    }

    if ($_POST['type'] == "load_station_data") {
        $LID = $_POST['LID'];
        if (empty($LID)) {
            echo "Empty fields";
        } else {
            $sql = "SELECT * FROM station WHERE lid='$LID'";
            $db = new DbConnect;
            if (!$conn = $db->connect()) {
                echo 'SQL Error';
                exit();
            } else {
                $stmt = $conn->prepare($sql);
                $stmt->execute();

                if ($result = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
                    echo json_encode($result[0]);
                }
            }
        }
    }

    if ($_POST['type'] == "load_vehicles") {
        $cid = $_POST['cid'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT `vehicle`.*, `vehicle_type`.`type`, `vehicle_type`.`description`, `vehicle_type`.`allowed_quota` FROM `vehicle`,`vehicle_type` WHERE `vehicle`.`vtid`=`vehicle_type`.`vtid` AND `vehicle`.`cid` ='$cid' ; ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "load_vehicle_by_qr") {
        $qr = $_POST['qr'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT `vehicle`.*, `vehicle_type`.`type`, `vehicle_type`.`description`, `vehicle_type`.`allowed_quota` FROM `vehicle`,`vehicle_type` WHERE `vehicle`.`vtid`=`vehicle_type`.`vtid` AND `vehicle`.`qr` ='$qr' ; ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec[0]);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "load_stations") {
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT * FROM `station`");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "load_vehicle_types") {
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT * FROM `vehicle_type`");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "load_fuel_types") {
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT * FROM `fuel_type`");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "load_records") {
        $cid = $_POST['cid'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT `record`.*,`vehicle`.`reg_no`,`station`.`name`,`station`.`address`,`fuel_type`.`fuel` FROM `record`,`vehicle`,`station`,`fuel_type` WHERE `record`.`vid`=`vehicle`.`vid` AND `record`.`sid`=`station`.`sid` AND `record`.`fid`=`fuel_type`.`fid` AND `vehicle`.`cid` ='$cid' ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "load_complaints") {
        $cid = $_POST['cid'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT * FROM `complaint` WHERE `cid` ='$cid' ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "load_station_records") {
        $sid = $_POST['sid'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT `record`.*,`vehicle`.`reg_no`,`station`.`name`,`station`.`address`,`fuel_type`.`fuel` FROM `record`,`vehicle`,`station`,`fuel_type` WHERE `record`.`vid`=`vehicle`.`vid` AND `record`.`sid`=`station`.`sid` AND `record`.`fid`=`fuel_type`.`fid` AND `station`.`sid` ='$sid' ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "add_vehicle") {
        $regNo = $_POST['regNo'];
        $brand = $_POST['brand'];
        $modal = $_POST['modal'];
        $engine = $_POST['engine'];
        $chassis = $_POST['chassis'];
        $qr = $_POST['qr'];
        $vtid = $_POST['vtid'];
        $cid = $_POST['cid'];
        $fid = $_POST['fid'];

        $db = new DbConnect;
        $sql = "INSERT INTO `vehicle`(`reg_no`, `brand`, `model`, `engine_no`, `chassis_no`, `qr`, `vtid`, `cid`, `fid`)  VALUES ('$regNo','$brand','$modal','$engine','$chassis','$qr',$vtid,$cid,$fid);";

        if (!$conn = $db->connect()) {
            echo "SQL Error";
            exit();
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if ($_POST['type'] == "get_stock_sid") {
        $SID = $_POST['SID'];
        if (empty($SID)) {
            echo "Empty fields";
        } else {
            get_stock_sid($SID);
        }
    }

    if ($_POST['type'] == "update_stock") {
        $SID = $_POST['SID'];
        $Petrol_STID = $_POST['Petrol_STID'];
        $Petrol_Amount = $_POST['Petrol_Amount'];
        $Diesel_STID = $_POST['Diesel_STID'];
        $Diesel_Amount = $_POST['Diesel_Amount'];

        $db = new DbConnect;
        $conn = $db->connect();
        $sql = "UPDATE `stock` SET `available_amount`='$Petrol_Amount' WHERE `stid`='$Petrol_STID';";
        $sql .= "UPDATE `stock` SET `available_amount`='$Diesel_Amount' WHERE `stid`='$Diesel_STID';";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        get_stock_sid($SID);
    }

    if ($_POST['type'] == "remaining_quota") {
        $vid = $_POST['vid'];

        $myObj3 = new \stdClass();
        $db = new DbConnect;

        if (!$conn = $db->connect()) {
            echo "SQL Error";
            exit();
        } else {
            $stmt = $conn->prepare("SELECT `vehicle_type`.`allowed_quota` FROM `vehicle_type`,`vehicle` WHERE `vehicle`.`vtid`=`vehicle_type`.`vtid` AND `vehicle`.`vid` ='$vid' ");
            $stmt->execute();
            if ($result = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
                $myObj3->allowed_quota = (int) $result[0]['allowed_quota'];
            }
            $stmt = $conn->prepare("SELECT COALESCE(SUM(amount),0) as extend_amount FROM `extends` WHERE `approval`=1 AND `vid` ='$vid' ");
            $stmt->execute();
            if ($result = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
                $myObj3->extend_amount = (int) $result[0]['extend_amount'];
            }
            $stmt = $conn->prepare("SELECT COALESCE(SUM(amount),0) as total_amount FROM `record` WHERE  week(`record`.`timestamp`)=week(now()) AND `vid` ='$vid' ");
            $stmt->execute();
            if ($result = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
                $myObj3->total_amount = (int) $result[0]['total_amount'];
            }

            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if ($_POST['type'] == "add_special_qr") {
        $cid = $_POST['cid'];
        $purpose = $_POST['purpose'];
        $amount = $_POST['amount'];
        $approval = 0;
        $ref = $_POST['ref'];
        $qr_code = $_POST['qr_code'];

        $db = new DbConnect;
        $sql = "INSERT INTO `special_qr`(`cid`, `purpose`, `amount`, `approval`, `ref`, `qr_code`)  VALUES ('$cid','$purpose','$amount','$approval','$ref','$qr_code');";

        if (!$conn = $db->connect()) {
            echo "SQL Error";
            exit();
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if ($_POST['type'] == "add_extend") {
        $vid = $_POST['vid'];
        $week = 0;
        $amount = $_POST['amount'];
        $ref = $_POST['ref'];
        $approval = 0;

        $db = new DbConnect;
        $sql = "INSERT INTO `extends`(`vid`, `week`, `amount`, `ref`, `approval`)  VALUES ('$vid','$week','$amount','$ref','$approval');";

        if (!$conn = $db->connect()) {
            echo "SQL Error";
            exit();
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if ($_POST['type'] == "add_fuel_arrival") {
        $sid = $_POST['sid'];
        $ft_id = $_POST['ft_id'];
        $timestamp = $_POST['timestamp'];
        $amount = $_POST['amount'];
        $status = 0;

        $db = new DbConnect;
        $sql = "INSERT INTO `fuel_arrival`(`sid`, `ft_id`, `amount`, `timestamp`, `status`)  VALUES ('$sid','$ft_id','$amount','$timestamp','$status');";

        if (!$conn = $db->connect()) {
            echo "SQL Error";
            exit();
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if ($_POST['type'] == "get_fuel_arrival") {
        $sid = $_POST['sid'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT `fuel_arrival`.*,`fuel_type`.`fuel` FROM `fuel_arrival`,`fuel_type` WHERE `fuel_arrival`.`ft_id`=`fuel_type`.`fid` AND `fuel_arrival`.`sid` ='$sid' ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "get_special_qr") {
        $cid = $_POST['cid'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT `sqr_id`, `cid`, `purpose`, `fuel_type`.`fid`, `fuel`, `amount`, `used`, `approval`, `ref`, `qr_code`, `status` FROM `special_qr`,`fuel_type` WHERE `special_qr`.`fid`=`fuel_type`.`fid` AND `status`=0 AND `cid` ='$cid' ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec[0]);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "load_specialQR_by_qr") {
        $qr = $_POST['qr'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT `sqr_id`, `customer`.`cid`,`customer`.`name`, `purpose`, `fuel_type`.`fid`, `fuel`, `amount`, `used`, `approval`, `ref`, `qr_code`, `status` FROM `special_qr`,`customer`,`fuel_type` WHERE `special_qr`.`fid`=`fuel_type`.`fid` AND `special_qr`.`cid`=`customer`.`cid` AND `qr_code` ='$qr' ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec[0]);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "load_fuel_arrivals") {
        $sid = $_POST['sid'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT `fa_id`, `sid`, `fid`, `fuel` , `amount`, `timestamp`, `status` FROM `fuel_arrival`,`fuel_type` WHERE `fuel_arrival`.`ft_id`=`fuel_type`.`fid` AND `sid` ='$sid' ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "get_extends") {
        $vid = $_POST['vid'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT `eid`, `vid`, `week`, `amount`, `ref`, `approval` FROM `extends` WHERE `vid` ='$vid' ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec[0]);
        } else {
            echo null;
        }
    }

    if ($_POST['type'] == "add_fuel_record") {
        $sid = $_POST['sid'];
        $vid = $_POST['vid'];
        $fid = $_POST['fid'];
        $amount = $_POST['amount'];

        $db = new DbConnect;
        $sql = "INSERT INTO `record`( `vid`, `sid`, `fid`, `amount`)  VALUES ('$vid','$sid','$fid','$amount');";
        $sql .= "UPDATE `stock` SET available_amount = available_amount - $amount WHERE `sid`='$sid' AND `fid`='$fid';";

        if (!$conn = $db->connect()) {
            echo "SQL Error";
            exit();
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if ($_POST['type'] == "add_specialQR_record") {
        $sid = $_POST['sid'];
        $fid = $_POST['fid'];
        $SPID = $_POST['SPID'];
        $amount = $_POST['amount'];

        $db = new DbConnect;
        $sql = "INSERT INTO `sp_record`(`SPID`, `sid`, `amount`)  VALUES ('$SPID','$sid','$amount');";
        $sql .= "UPDATE `special_qr` SET used =  used + $amount WHERE `sqr_id`='$SPID';";
        $sql .= "UPDATE `stock` SET available_amount = available_amount - $amount WHERE `sid`='$sid' AND `fid`='$fid';";

        if (!$conn = $db->connect()) {
            echo "SQL Error";
            exit();
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if ($_POST['type'] == "add_complaint") {
        $cid = $_POST['cid'];
        $note = $_POST['note'];

        $db = new DbConnect;
        $sql = "INSERT INTO `complaint`( `note`, `cid`) VALUES ('$note','$cid');";

        if (!$conn = $db->connect()) {
            echo "SQL Error";
            exit();
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if ($_POST['type'] == "update_station_status") {
        $LID = $_POST['LID'];
        $opn_cls_status = $_POST['opn_cls_status'];
        $queue_status = $_POST['queue_status'];

        $db = new DbConnect;
        $conn = $db->connect();
        $sql = "UPDATE `station` SET `opn_cls_status`='$opn_cls_status', `queue_status`='$queue_status' WHERE `lid`='$LID';";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $myObj3 = new \stdClass();
        $myObj3->Status = "1";
        $myJSON3 = json_encode($myObj3);
        echo "$myJSON3";
    }

    if ($_POST['type'] == "update_fuel_arrival_status") {
        $fa_id = $_POST['fa_id'];
        $fid = $_POST['fid'];
        $sid = $_POST['sid'];
        $amount = $_POST['amount'];
        $status = $_POST['status'];

        $db = new DbConnect;
        $conn = $db->connect();
        $sql = "UPDATE `fuel_arrival` SET `status`='$status' WHERE `fa_id`='$fa_id';";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        updateFuelStock($fid, $sid, $amount);
        $myObj3 = new \stdClass();
        $myObj3->Status = "1";
        $myJSON3 = json_encode($myObj3);
        echo "$myJSON3";
    }

    if ($_POST['type'] == "remove_special_qr") {
        $SPID = $_POST['SPID'];
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("UPDATE `special_qr` SET `status`=1 WHERE `SPID` ='$SPID' ");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            echo json_encode($rec);
        } else {
            echo null;
        }
    }

} else {
    echo "error !";
}

?>