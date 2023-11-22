<?php

function uploadfile($file,$allowd,$fileDestination){

        $filename = $file['name'];
        $filetempname = $file['tmp_name'];
        $filesize = $file['size'];
        $fileerror = $file['error'];
        $filetype = $file['type'];
	    $fileExt = explode('.',$filename);
        $fileActualExt = strtolower(end($fileExt));
		$fileuniqid = uniqid('',true);
        //echo $fileActualExt;
    	if (in_array($fileActualExt,$allowd)){
	        if ($fileerror == 0 ){
	            if ($filesize < 100000000){
	                $fileNameNew = $fileuniqid.".".$fileActualExt;
                    move_uploaded_file($filetempname,"$fileDestination/$fileNameNew"); 
                    return $fileNameNew;
	            } else {
	                echo'<script language="javascript">
	                window.alert("File is too big !")
	                </script>';
	                exit();
	            }
	        } else {
	            echo'<script language="javascript">
	                window.alert("Error in File !")
	                </script>';
	                exit();
	        }
	    } else {
	        echo'<script language="javascript">
	                window.alert("You cant uplode file of this type !")
	                </script>';
	                exit();
	    }

}

function upload_multi_files($file,$allowd,$fileDestination){

	$name_array = array();
	foreach($file['tmp_name'] as $key => $tmp_name){

		$filename = $file['name'][$key];
		$filetempname = $file['tmp_name'][$key];
		$filesize = $file['size'][$key];
		$fileerror = $file['error'][$key];
		$filetype = $file['type'][$key];
		$fileExt = explode('/',$filetype);
		$fileActualExt = strtolower(end($fileExt));
		$fileuniqid = uniqid('',true);
	
		if (in_array($fileActualExt,$allowd)){
			if ($fileerror == 0 ){
				if ($filesize < 1000000){
					$fileNameNew = $fileuniqid.".".$fileActualExt;
					move_uploaded_file($filetempname,"$fileDestination/$fileNameNew"); 
					$name_array[] = $fileNameNew;
				} else {
					echo'<script language="javascript">
					window.alert("File is too big !")
					</script>';
					exit();
				}
			} else {
				echo'<script language="javascript">
					window.alert("Error in File !")
					</script>';
					exit();
			}
		} else {
			echo'<script language="javascript">
					window.alert("You cant uplode file of this type !")
					</script>';
					exit();
		}

	}

	return $name_array;
 
}
