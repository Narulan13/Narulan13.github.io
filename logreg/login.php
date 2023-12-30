<?php
require_once('db.php');
$login = $_POST['login'];
$pass = $_POST['pass'];
$img = $_POST['img'];
if(empty($login) || empty($pass)){
    echo "Заполните все поля";
} else {
    $sql = "SELECT * FROM `Users` WHERE login = '$login' AND pass = '$pass' LIMIT 1";
    $result = $conn -> query($sql);

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $show_img = base64_encode($row['pfp']);?>
            <img src="data:image/jpg;base64, <?php echo $show_img?>" alt=""><?php
            echo "Добро Пожаловать ". $row['login'];
            echo "Ваш пароль:  ". $row['pass'];
        }
    } else{
        echo "Нет такого пользователя!";
    }
}?>