
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

}

?>

