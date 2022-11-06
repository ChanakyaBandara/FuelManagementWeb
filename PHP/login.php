<?php
	
	if(isset($_POST['log-in'])){

		require 'dbconnect.php';
		
		$username = $_POST['Username'];
		$password = $_POST['Password'];

		if(empty($username) || empty($password)){

			echo'<script language="javascript">
						window.alert("Please fill the empty fields")
						window.location.href = "../index.html"
						</script>';
						exit();
		}else{

			$sql = "SELECT * FROM `users` WHERE Username='$username'";
            $db = new DbConnect;
            if(!$conn = $db->connect()){

				echo'<script language="javascript">
						window.alert("SQL ERROR. Please check the SQL code ")
						window.location.href = "../index.html"
						</script>';
						exit();
						
			}else{

				$stmt = $conn->prepare($sql);
				$stmt->execute();
				
				if($result = $stmt->fetchAll(PDO::FETCH_ASSOC)){
					
					$passveri;
					$ID;
					$Sts;

					foreach ($result as $rows) {
                        $passveri = $rows['Password'];
                        $ID = $rows['LID'];
                        $Sts = $rows['Type'];
                    }

					$pwdcheck = false;

					if (password_verify($password, $passveri)){
						$pwdcheck = true;
					}

					if($pwdcheck == false){
						echo'<script language="javascript">
						window.alert("You entered a Wrong Password !")
						window.location.href = "../index.html"
						</script>';
						exit();
						
					}else if($pwdcheck == true){
						$status = $Sts;

						switch ($status) {
							case 1:

								echo '<script language="javascript">
									window.location.href = "../admin_dashboard.html"
									</script>';
									exit();

								break;

							case 2:
								
								$SQLsub = "SELECT `ph_ID`, `Ph_name` FROM `pharmacy` WHERE LID = " . $ID . ";";
								$stmt = $conn->prepare($SQLsub);
								$stmt->execute();

								if($result = $stmt->fetchAll(PDO::FETCH_ASSOC)){

									$ph_ID;
									$Ph_name;

									foreach ($result as $rows) {
										$ph_ID = $rows['ph_ID'];
                                        $Ph_name = $rows['Ph_name'];
				                    }
                                    
                                    echo '<script language="javascript">
                                    localStorage.setItem("ph_ID","'.$ph_ID.'");
									localStorage.setItem("Ph_name","'.$Ph_name.'");
									window.location.href = "../pharmacy_dashboard.html"
									</script>';
									exit();
                                }
								
								break;

							case 3:
								
									$SQLsub = "SELECT `DID`, `D_name` FROM `doctor` WHERE LID = " . $ID . "";
									echo $SQLsub;
									$stmt = $conn->prepare($SQLsub);
									$stmt->execute();
	
									if($result = $stmt->fetchAll(PDO::FETCH_ASSOC)){
	
										$DID;
										$D_name;
	
										foreach ($result as $rows) {
											$DID = $rows['DID'];
											$D_name = $rows['D_name'];
										}
										
										echo '<script language="javascript">
										localStorage.setItem("DID","'.$DID.'");
										localStorage.setItem("D_name","'.$D_name.'");
										window.location.href = "../doctor_dashboard.html"
										</script>';
										exit();
									}
									
									break;
	
							default:
								echo'<script language="javascript">
								window.alert("Error'.$status.'!")
								window.location.href = "../index.html"
								</script>';
								exit();
								break;
						}
				
					}else{
						echo'<script language="javascript">
						window.alert("You entered a Wrong Password !")
						window.location.href = "../index.html"
						</script>';
						exit();
						
					}

				}else{
					echo'<script language="javascript">
						window.alert("Username incorrect! Please check the username and try again..")
						window.location.href = "../index.html"
						</script>';
						exit();
				}
			}
		}
	}else{

		echo'<script language="javascript">
		window.alert("Wrong connection")
		window.location.href = "../index.html"
		</script>';
		exit();

	}
	
?>