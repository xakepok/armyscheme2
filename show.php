<?php
require_once 'auth.php';
require_once 'mysqli.php';
$mysqli = new mysqli(MYSQLI_SERVER, MYSQLI_USER, MYSQLI_PASS, MYSQLI_DB);
if ($mysqli->connect_errno) exit('error');
$query = "SELECT * FROM `scheme_stat` where `from` != 0 and `to` != 0";
$result = $mysqli->query($query);
if (isset($_GET['ajax'])) {
    $res = array();
    while ($rows = $result->fetch_assoc()) {
        $arr = array();
        $dat = new DateTime($rows['dat']);
        $arr['dat'] = $dat->format("d.m.Y H:i:s");
        $arr['from'] = $rows['from'];
        $arr['to'] = $rows['to'];
        $arr['ip'] = $rows['ip'];
        $arr['coords'] = $rows['latitude'].",".$rows['longitude'];
        $res[] = $arr;
    };
    $res = json_encode(array('data' => $res));
    exit($res);
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="media/css/bootstrap.min.css">
    <link rel="stylesheet" href="media/css/dataTables.bootstrap4.min.css">
    <link rel="icon" href="media/images/favicon.png" type="image/x-icon"/>

    <title>АРМИЯ-2019. Статистика.</title>
</head>
<body>
<div class="container">
    <div>
        <p class="h3 text-center">Статистика</p>
    </div>
    <div class="stat">
        <table id="data" class="table table-sm" style="width: 100%;">
            <thead>
                <tr>
                    <th>Время</th>
                    <th>Откуда</th>
                    <th>Куда</th>
                    <th>Местоположение</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
</div>
<script src="media/js/jquery-3.4.1.min.js"></script>
<script src="media/js/jquery.dataTables.min.js"></script>
<script src="media/js/dataTables.bootstrap4.min.js"></script>
<script src="media/js/show.min.js"></script>
</body>
</html>
