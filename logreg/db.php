<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registerUser";

$conn = mysqli_connect($server, $username, $password, $dbname);

if(!$conn){
    die("Connect Failed". mysqli_connnect_error());
}
?>