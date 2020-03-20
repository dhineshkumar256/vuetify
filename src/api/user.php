<?php
header("Access-Control-Allow-Origin: *");
echo '{
    "user1" : {
        "name": "dinesh",
        "password" : "admin123"
    },
    "user2": {
        "name" : "siva",
        "password" : "admin123"
    }
}'
?>