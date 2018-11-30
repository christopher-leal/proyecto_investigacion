<?php
    $conn = new mysqli('us-cdbr-iron-east-01.cleardb.net','b885830d782d42','22f7f91f','heroku_8f86bb4b3e24a4c');

    if($conn->connect_error) {
        echo $error->$conn->connect_error;
    }
?>