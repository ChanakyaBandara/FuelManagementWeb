
<?php
    require 'dbconnect.php';

    function creat_user($nic,$Password,$type){
        $db = new DbConnect;
        $hashed = password_hash($Password, PASSWORD_BCRYPT);
        $sql = "INSERT INTO  `login`( `username`, `password`, `type`) VALUES ('$nic','$hashed',$type)";

        if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
            $conn->exec($sql);
            $last_id = $conn->lastInsertId();
            return $last_id;
        }
    }

    function get_stock_sid($SID) {
        $db = new DbConnect;
        $conn = $db->connect();
        $stmt = $conn->prepare("SELECT `stock`.*,`fuel_type`.`fuel` FROM `stock`,`fuel_type` WHERE `stock`.`fid`=`fuel_type`.`fid` AND `stock`.`sid` ='$SID'");
        $stmt->execute();
        $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if(!empty($rec)){
            echo json_encode($rec);
        }else{
            $sql = "INSERT INTO `stock`(`sid`, `fid`, `available_amount`) VALUES ('$SID',1,0),('$SID',2,0)";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            get_stock_sid($SID);
        }
    }

if(isset($_POST['type'])){

    if($_POST['type']=="login"){
        $username =  $_POST['Username'];
        $password =  $_POST['Password'];
        if(empty($username) || empty($password)){
            echo "Empty fields";
        }
        else {
            $sql = "SELECT * FROM `login` WHERE username='$username'";
            $db = new DbConnect;
            if(!$conn = $db->connect())
                {
                    echo 'SQL Error';
                            exit();
                }
                else {
                    $stmt = $conn->prepare($sql);
                    $stmt->execute();
                    $UID ="";
                    $type ="";
                    $myObj2 = new \stdClass();
                    if($result = $stmt->fetchAll(PDO::FETCH_ASSOC))
                    {
                        foreach ($result as $rows) {
                                $UID =$rows['lid'];
                                $tempPass =$rows['password'];
                                $type = $rows['type'];
                            }

                            if(password_verify($password, $tempPass)){
                                $myObj2->Status = "1";
                                $myObj2->LID = $UID;
                                $myObj2->Type = $type;
                            }else{
                                $myObj2->Status = "0";
                            }
                    }
                    else {
                        $myObj2->Status = "0";
                        //echo "Invalid Credentials 0";
                    } 
                    $myJSON2 = json_encode($myObj2);
                    echo "$myJSON2";
                }
            
        }
    }

    if($_POST['type']=="addCustomer"){
        //name email nic age phone gender Password
        $name = $_POST['name'];
        $nic = $_POST['nic'];
        $email  = $_POST['email'];
        $phone  = $_POST['phone'];
        $address = $_POST['address'];
        $Password = $_POST['Password'];


        $LID = creat_user($email,$Password,2);
        $db = new DbConnect;
        $sql = "INSERT INTO `customer`(`name`, `nic`, `email`, `phone`, `address`, `lid`)  VALUES ('$name','$nic','$email','$phone','$address','$LID');";

        if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
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

    if($_POST['type']=="addFuelStation"){
        //name email nic age phone gender Password
        $name = $_POST['name'];
        $email  = $_POST['email'];
        $reg_no = $_POST['reg_no'];
        $city = $_POST['city'];
        $address = $_POST['address'];
        $phone  = $_POST['phone'];
        $lat  = $_POST['lat'];
        $lon  = $_POST['lon'];
        $Password = $_POST['Password'];


        $LID = creat_user($email,$Password,3);
        $db = new DbConnect;
        $sql = "INSERT INTO `station`(`name`, `email`, `reg_no`, `city`, `address`, `phone`, `lat`, `lon`, `lid`)  VALUES ('$name','$email','$reg_no',$city,'$address','$phone','$lat','$lon','$LID');";

        if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myObj3->LID = $LID;
            $myObj3->Type = 3;
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if($_POST['type']=="load_customer_data"){
        $LID =  $_POST['LID'];
        if(empty($LID)){
            echo "Empty fields";
        }
        else {
            $sql = "SELECT * FROM customer WHERE lid='$LID'";
            $db = new DbConnect;
            if(!$conn = $db->connect())
                {
                    echo 'SQL Error';
                            exit();
                }
                else {
                    $stmt = $conn->prepare($sql);
                    $stmt->execute();
                    
                    if($result = $stmt->fetchAll(PDO::FETCH_ASSOC))
                        {
                            echo json_encode($result[0]);
                        }        
                }
        }
    }

    if($_POST['type']=="load_station_data"){
        $LID =  $_POST['LID'];
        if(empty($LID)){
            echo "Empty fields";
        }
        else {
            $sql = "SELECT * FROM station WHERE lid='$LID'";
            $db = new DbConnect;
            if(!$conn = $db->connect())
                {
                    echo 'SQL Error';
                            exit();
                }
                else {
                    $stmt = $conn->prepare($sql);
                    $stmt->execute();
                    
                    if($result = $stmt->fetchAll(PDO::FETCH_ASSOC))
                        {
                            echo json_encode($result[0]);
                        }        
                }
        }
    }

    if($_POST['type']=="load_vehicles") {
        $cid =  $_POST['cid'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `vehicle`.*, `vehicle_type`.`type`, `vehicle_type`.`description`, `vehicle_type`.`allowed_quota` FROM `vehicle`,`vehicle_type` WHERE `vehicle`.`vtid`=`vehicle_type`.`vtid` AND `vehicle`.`cid` ='$cid' ; ");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="load_stations") {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM `station`");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="load_records") {
        $cid =  $_POST['cid'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `record`.*,`vehicle`.`reg_no`,`station`.`name`,`station`.`address`,`fuel_type`.`fuel` FROM `record`,`vehicle`,`station`,`fuel_type` WHERE `record`.`vid`=`vehicle`.`vid` AND `record`.`sid`=`station`.`sid` AND `vehicle`.`fid`=`fuel_type`.`fid` AND `vehicle`.`cid` ='$cid' ");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="load_station_records") {
        $sid =  $_POST['sid'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `record`.*,`vehicle`.`reg_no`,`station`.`name`,`station`.`address`,`fuel_type`.`fuel` FROM `record`,`vehicle`,`station`,`fuel_type` WHERE `record`.`vid`=`vehicle`.`vid` AND `record`.`sid`=`station`.`sid` AND `vehicle`.`fid`=`fuel_type`.`fid` AND `station`.`sid` ='$sid' ");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="addVehicle"){
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

        if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if($_POST['type']=="get_stock_sid") {
        $SID =  $_POST['SID'];
        if(empty($SID)){
            echo "Empty fields";
        } else {
            get_stock_sid($SID);
        }
    }

    if($_POST['type']=="update_stock") {
        $SID =  $_POST['SID'];
        $Petrol_STID =  $_POST['Petrol_STID'];
        $Petrol_Amount =  $_POST['Petrol_Amount'];
        $Diesel_STID =  $_POST['Diesel_STID'];
        $Diesel_Amount =  $_POST['Diesel_Amount'];

        $db = new DbConnect;
        $conn = $db->connect();
        $sql = "UPDATE `stock` SET `available_amount`='$Petrol_Amount' WHERE `stid`='$Petrol_STID';";
        $sql .= "UPDATE `stock` SET `available_amount`='$Diesel_Amount' WHERE `stid`='$Diesel_STID';";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        get_stock_sid($SID);
    }

    if($_POST['type']=="remaining_quota"){
        $vid = $_POST['vid'];

        $myObj3 = new \stdClass();
		$db = new DbConnect;

        if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
            $stmt = $conn->prepare("SELECT `vehicle_type`.`allowed_quota` FROM `vehicle_type`,`vehicle` WHERE `vehicle`.`vtid`=`vehicle_type`.`vtid` AND `vehicle`.`vid` ='$vid' ");
            $stmt->execute();
            if($result = $stmt->fetchAll(PDO::FETCH_ASSOC)){
                $myObj3->allowed_quota = (int)$result[0]['allowed_quota'];
            }
            $stmt = $conn->prepare("SELECT COALESCE(SUM(amount),0) as total_amount FROM `record` WHERE `vid` ='$vid' ");
            $stmt->execute();
            if($result = $stmt->fetchAll(PDO::FETCH_ASSOC)){
                $myObj3->total_amount = (int)$result[0]['total_amount'];
            }

            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if($_POST['type']=="add_special_qr"){
        $cid = $_POST['cid'];
        $purpose = $_POST['purpose'];
        $amount = $_POST['amount'];
        $approval = 0;
        $ref = $_POST['ref'];
        $qr_code = $_POST['qr_code'];

        $db = new DbConnect;
        $sql = "INSERT INTO `special_qr`(`cid`, `purpose`, `amount`, `approval`, `ref`, `qr_code`)  VALUES ('$cid','$purpose','$amount','$approval','$ref','$qr_code');";

        if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if($_POST['type']=="add_extend"){
        $vid = $_POST['vid'];
        $week = $_POST['week'];
        $amount = $_POST['amount'];
        $ref = $_POST['ref'];
        $approval = 0;

        $db = new DbConnect;
        $sql = "INSERT INTO `extends`(`vid`, `week`, `amount`, `ref`, `approval`)  VALUES ('$vid','$week','$amount','$ref','$approval');";

        if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if($_POST['type']=="add_fuel_arrival"){
        $sid = $_POST['sid'];
        $ft_id = $_POST['ft_id'];
        $amount = $_POST['amount'];
        $status = 0;

        $db = new DbConnect;
        $sql = "INSERT INTO `fuel_arrival`(`sid`, `ft_id`, `amount`, `status`)  VALUES ('$sid','$ft_id','$amount','$status');";

        if(!$conn = $db->connect()){
            echo "SQL Error";
            exit();
        }
        else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $myObj3 = new \stdClass();
            $myObj3->Status = "1";
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if($_POST['type']=="get_fuel_arrival") {
        $sid =  $_POST['sid'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `fuel_arrival`.*,`fuel_type`.`fuel` FROM `fuel_arrival`,`fuel_type` WHERE `fuel_arrival`.`sid` ='$sid' ");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="get_special_qr") {
        $cid =  $_POST['cid'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `sqr_id`, `cid`, `purpose`, `amount`, `approval`, `ref`, `qr_code` FROM `special_qr` WHERE `cid` ='$cid' ");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="get_extends") {
        $vid =  $_POST['vid'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `eid`, `vid`, `week`, `amount`, `ref`, `approval` FROM `extends` WHERE `vid` ='$vid' ");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }
}

?>

