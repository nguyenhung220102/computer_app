<?php
    include "./controllers/admin.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $admin = new AdminController();

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 

    if($method == "GET") {
        if ($queryValue == null) {
            
        }
        else {
            $queryParam = explode( '=', $queryValue );
            if ($queryParam[0] == "ID") {
                $result = $admin->viewAll($server->db, $queryParam[1]);
                echo($result);
                http_response_code(200);
            } 
        }
    }

    elseif($method == "PUT") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $admin->updateAdmin($server->db, $data);

        if(strcmp(json_decode($result), "Success") == 0) {
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }


?>