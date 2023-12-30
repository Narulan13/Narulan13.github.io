<?php
 require_once("db.php");
$login =  $_POST['login'];
$pass =  $_POST['pass'];
$repeatpass =  $_POST['repeatpass'];
$email =  $_POST['email'];
move_uploaded_file($img_tmp_name, "uploads/" . $img_name);
if(isset($_POST['reg'])){
if(empty($login) || empty($pass) || empty($email) || empty($repeatpass) || empty($_FILES['img']['tmp_name'])){
    echo "Заполните все поля";
} else{
    if($pass != $repeatpass){
        echo "Пароли не совпадают";
    } else {
        $img = addslashes(file_get_contents($_FILES['img']['tmp_name']));
        $sql = "INSERT INTO `Users` (login,pass,email,pfp) VALUES ('$login', '$pass', '$email', '$img')";
        if($conn -> query($sql) === TRUE){
            echo "Успешная регистрация!";
        } else{
            echo "Ошибка : " . $conn->error;
        }
    } 
}}
?>


