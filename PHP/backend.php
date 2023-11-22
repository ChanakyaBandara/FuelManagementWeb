<?php
date_default_timezone_set("asia/colombo");
require 'file_upload.php';
require 'dbconnect.php';

define('orginal_dir', 'uploads');

if (isset($_FILES['File'])) {

  $file_new_name = "0";
  $file_orginal_name = "0";

  if ($_FILES['File']['size'] <> 0) {
    $file = $_FILES['File'];
    $allowd = array('json');
    $fileDestination = orginal_dir;
    $file_orginal_name = $file['name'];
    $file_new_name = uploadfile($file, $allowd, $fileDestination);
    insertDoc($file_orginal_name, $file_new_name);
  }
}

function insertDoc($file_orginal_name, $file_new_name)
{
  $system_name = $_POST['system_name'];
  $discription = $_POST['discription'];

  $db = new DbConnect;
  $sql = "INSERT INTO `docs`(`system_name`, `file_name`, `file_path`, `discription`, `status`)  VALUES ('$system_name','$file_orginal_name','$file_new_name','$discription',1);";

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

if (isset($_POST['load_docs'])) {
  $db = new DbConnect;
  $conn = $db->connect();
  $stmt = $conn->prepare("SELECT * FROM `docs`");
  $stmt->execute();
  $rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
  if ($stmt->rowCount() > 0) {
      echo json_encode($rec);
  } else {
      echo null;
  }
}

?>