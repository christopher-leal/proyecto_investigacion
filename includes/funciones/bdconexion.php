<?php
    $conn = new mysqli('localhost','root','','gps');

    if($conn->connect_error) {
        echo $error->$conn->connect_error;
    }
?>