
<?php
    require 'dbconnect.php';

    function creat_user($nic,$Password){
        $db = new DbConnect;
        $hashed = password_hash($Password, PASSWORD_BCRYPT);
        $sql = "INSERT INTO  `users`( `Username`, `Password`) VALUES ('$nic','$hashed')";

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

    if($_POST['type']=="addMember"){
        //name email nic age phone gender Password
        $name = $_POST['name'];
        $nic = $_POST['nic'];
        $gender = $_POST['gender'];
        $age  = $_POST['age'];
        $email  = $_POST['email'];
        $phone  = $_POST['phone'];
        $Password = $_POST['Password'];


        $LID = creat_user($email,$Password);
        $db = new DbConnect;
        $sql = "INSERT INTO `member`(`name`, `email`, `nic`, `age`, `phone`, `gender`, `LID`)  VALUES ('$name','$email','$nic','$age','$phone','$gender','$LID');";

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
            $myJSON3 = json_encode($myObj3);
            echo "$myJSON3";
        }
    }

    if($_POST['type']=="load_member_data"){
        $LID =  $_POST['LID'];
        if(empty($LID)){
            echo "Empty fields";
        }
        else {
            $sql = "SELECT * FROM member WHERE LID='$LID'";
            $db = new DbConnect;
            if(!$conn = $db->connect())
                {
                    echo 'SQL Error';
                            exit();
                }
                else {
                    //`name`, `email`, `nic`, `age`, `phone`, `gender`
                    $stmt = $conn->prepare($sql);
                    $stmt->execute();
                    $name ="";
                    $phone ="";
                    $age ="";
                    $NIC ="";
                    $Email ="";
                    $Gender ="";
                    
                    if($result = $stmt->fetchAll(PDO::FETCH_ASSOC))
                        {
                            foreach ($result as $rows) {
                                    $name =$rows['name'];
                                    $phone =$rows['phone'];
                                    $age =$rows['age'];
                                    $NIC =$rows['nic'];
                                    $Email =$rows['email'];
                                    $Gender =$rows['gender'];
                                }
                                $myObj1 = new \stdClass();
                                $myObj1->Name = $name;
                                $myObj1->Phone = $phone;
                                $myObj1->Age = $age;
                                $myObj1->NIC = $NIC;
                                $myObj1->Email = $Email;
                                $myObj1->Gender = $Gender;
                                $myJSON1 = json_encode($myObj1);
                                echo "$myJSON1";
                        }        
                }
            
        }
    }

    if($_POST['type']=="load_member_name"){
        $LID =  $_POST['LID'];
        if(empty($LID)){
            echo "Empty fields";
        }
        else {
            $sql = "SELECT `MID`,`Name` FROM member WHERE LID='$LID'";
            $db = new DbConnect;
            if(!$conn = $db->connect())
                {
                    echo 'SQL Error';
                            exit();
                }
                else {
                    $stmt = $conn->prepare($sql);
                    $stmt->execute();
                    $name ="";
                    $mid ="";
                    
                    if($result = $stmt->fetchAll(PDO::FETCH_ASSOC))
                        {
                            foreach ($result as $rows) {
                                    $name =$rows['Name'];
                                    $mid =$rows['MID'];
                                }
                                $myObj1 = new \stdClass();
                                $myObj1->MID = $mid;
                                $myObj1->Name = $name;
                                $myJSON1 = json_encode($myObj1);
                                echo "$myJSON1";
                        }        
                }
            
        }
    }

    if($_POST['type']=="load_prescription") {
        $MID =  $_POST['MID'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `Pre_ID`, `Pre_Date`, `QR_ID`,`D_Name` FROM `prescription`,`doctor` WHERE prescription.DID=doctor.DID AND prescription.MID ='$MID' ORDER BY prescription.Pre_Date DESC ");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="load_select_prescription") {
        $MID =  $_POST['MID'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `Pre_ID`, `Pre_Date`, `QR_ID`,`D_Name` FROM `prescription`,`doctor` WHERE prescription.DID=doctor.DID AND prescription.MID ='$MID' ORDER BY prescription.Pre_Date DESC ");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="load_drugs") {
        $PreID =  $_POST['PreID'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `drg_ID`, `drg_name`, `manf_comp`, `drg_strength`, `drg_Desc`, `drg_Img`, `dose` FROM `drugs`,`pre_drg` WHERE drugs.drg_ID=pre_drg.DRID AND pre_drg.PRID ='$PreID'");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="load_history") {
        $MID =  $_POST['MID'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT `oder_id`, `oder_date`, `reference`, `Cost`, `PHID`, `PID`, `Ph_name` FROM `oders`,`pharmacy`,`prescription` WHERE oders.PHID=pharmacy.ph_ID AND oders.PID=prescription.Pre_ID AND prescription.MID ='$MID' ORDER BY oders.oder_date DESC");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="load_drug") {
        $DRid =  $_POST['DRid'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM `drugs` WHERE drg_ID ='$DRid'");
		$stmt->execute();
		$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($rec);
    }

    if($_POST['type']=="load_doctor") {
        $QR = $_POST['Doc_QR'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM `doctor` WHERE `QRID`='$QR';");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
    }

    if($_POST['type']=="load_pharmacy") {
        $QR = $_POST['Pha_QR'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM `pharmacy` WHERE `QRID`='$QR';");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
    }

    if($_POST['type']=="load_doc_queue") {
        $MID =  $_POST['MID'];
        $DID =  $_POST['DID'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("INSERT INTO `doctor_queue`(`DID`, `MID`) VALUES ('$DID','$MID');");
		$stmt->execute();
        $last_id = $conn->lastInsertId();
		$stmt = $conn->prepare("SELECT `DQID`, `D_name`, `name`, `timestamp`, `status` FROM `doctor_queue`,`member`,`doctor` WHERE `member`.`MID` = `doctor_queue`.`MID` AND `doctor`.`DID` = `doctor_queue`.`DID` AND
        `DQID`='$last_id';");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
    }

    if($_POST['type']=="load_pharmacy_queue") {
        $MID =  $_POST['MID'];
        $Pha_ID =  $_POST['Pha_ID'];
        $Pres_ID =  $_POST['Pres_ID'];
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("INSERT INTO `phamacy_queue`(`PHID`, `PREID`) VALUES ('$Pha_ID','$Pres_ID');");
		$stmt->execute();
		$last_id = $conn->lastInsertId();
		$stmt = $conn->prepare("SELECT `PQID`, `Ph_name`, `timestamp`, `status` FROM `phamacy_queue`,`pharmacy` WHERE `phamacy_queue`.`PHID` = `pharmacy`.`ph_ID` AND `PQID` = '$last_id';");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
    }

}

?>

