<?php
if (!isset($_SESSION['user'])) {
    if (isset($_SERVER['PHP_AUTH_USER']) && isset($users[strtolower($_SERVER['PHP_AUTH_USER'])]) && $users[strtolower($_SERVER['PHP_AUTH_USER'])] == $_SERVER['PHP_AUTH_PW']) {
        $_SESSION['user'] = $users[strtolower($_SERVER['PHP_AUTH_USER'])];
    }
    else {
        header('WWW-Authenticate: Basic realm="Backend"');
        header('HTTP/1.0 401 Unauthorized');
        exit ('Authenticate required!');
    }
}
