<?php
$mysqli = new mysqli('localhost', 'joomla', 'gO2fc7tEzPwT2', 'joomla');
if ($mysqli->connect_errno) exit('error');
$ip = $_SERVER['REMOTE_ADDR'] ?? '0';
$latitude = $_REQUEST['latitude'] ?? '0';
$longitude = $_REQUEST['longitude'] ?? '0';
$dat = date("Y-m-d H:i:s");
$from = $_REQUEST['from'] ?? '0';
$to = $_REQUEST['to'] ?? '0';
$query = "INSERT INTO `scheme_stat` (id, dat, ip, latitude, longitude, `from`, `to`) VALUES
(null, '{$dat}', '{$ip}', '{$latitude}', '{$longitude}', '{$from}', '{$to}')";
exit(json_encode(array('data' => (!$result = $mysqli->query($query)) ? 'sorry' : 'Вы сами на это согласились!')));

