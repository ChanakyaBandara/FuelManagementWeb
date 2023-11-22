<?php

define('decrypted_dir','../LocalStorage/decrypted_files');

if (isset($_GET['path'], $_GET['name'])) {

    $path_dir = $_GET['path'];
    $file_Name = $_GET['name'];
    downloadFile($path_dir, $file_Name);
}

if (isset($_GET['file_name'])) {
    $path_dir = decrypted_dir.'/';
    $file_Name = $_GET['file_name'];
    downloadFile($path_dir, $file_Name);
}

if (isset($_GET['path'], $_GET['file_Names'])) {
    $path_dir = $_GET['path'];
    $file_Names = $_GET['file_Names'];
    downloadMultipleFiles($path_dir, $file_Names);
}

function downloadFile($path_dir, $file_Name)
{
    $fileName = basename($file_Name);
    $filePath = $path_dir . $fileName;
    //echo $path_dir;
    if (!empty($fileName) && file_exists($filePath)) {
        //Define headers
        header("Cache-Control: public");
        header("Content-Description: File Transfer");
        header("Content-Disposition: attachment; filename=$fileName");
        header("Content-Type: applicatin/zip");
        header("Content-Transfer-Encoding: binary");

        //Read the file

        readfile($filePath);
        exit;
    }
}

function downloadMultipleFiles($path_dir, $file_Names)
{
    $zip = new ZipArchive;
    $zip_name = time() . '.zip';
    foreach ($file_Names as $name) {
        array_push($filesToZip, $name);
    }
    if ($zip->open($zip_name, ZipArchive::CREATE) === TRUE) {
        foreach ($filesToZip as $file) {
            $zip->addFile($path_dir . $file, $file);
        }
        $zip->close();
        ///Then download the zipped file.
        header('Content-Type: application/zip');
        header('Content-disposition: attachment; filename=' . $zip_name);
        header('Content-Length: ' . filesize($zip_name));
        readfile($zip_name);
        unlink($zip_name);
    }
}
