<?php
    $conn = new mysqli('localhost','root','','pgpi');

    if($conn->connect_error) {
        echo $error->$conn->connect_error;
    }
?>