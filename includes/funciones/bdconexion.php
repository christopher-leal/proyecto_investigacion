<?php
    $conn = new mysqli('us-cdbr-iron-east-01.cleardb.net','b885830d782d42','22f7f91f','pgpi');

    if($conn->connect_error) {
        echo $error->$conn->connect_error;
    }
?>