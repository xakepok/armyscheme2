<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <link rel="stylesheet" href="media/css/bootstrap.min.css">
    <link rel="stylesheet" href="media/css/bootstrap-select.min.css">
    <link rel="icon" href="media/images/favicon.png" type="image/x-icon"/>

    <title>АРМИЯ-2020. Навигация.</title>
</head>
<body>
<div class="container">
    <div class="text-center"><h6>Схема движения транспорта на международном военно-техническом форуме "Армия-2020"</h6></div>
    <div id="l-form">
        <div class="form-group">
            <div class="form-group">
                <select name="from" id="form_from" class="form-control">

                </select>
            </div>
            <div class="form-group">
                <select name="to" id="form_to" class="form-control">
                    <option value="0">Куда</option>
                </select>
            </div>
        </div>
    </div>
    <div id="l-route" style="display: none; width: 100%;">
        <div class="text-center">
            <h4>Подробный маршрут</h4>
            <object type="image/svg+xml" id="route">Маршрут ещё не прорисован</object>
        </div>
        <a href="#" id="link-reset">
            <div class="alert alert-primary text-center" role="alert">
                Начать заново
            </div>
        </a>
    </div>
    <div class="w-100 h-100" id="l-scheme">
        <object type="image/svg+xml" id="scheme" data="media/scheme/scheme-2020.svg">Не удаётся загрузить схему</object>
    </div>
    <div class="text-center" style="font-size: 0.4em;">Пользуясь данной интерактивной схемой, вы соглашаетесь с <a href="#" data-toggle="modal" data-target="#legal">условиями использования</a>.</div>
    <div class="modal fade" id="legal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="exampleModalLongTitle">Условия</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Понятно">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    При поиске маршрута между остановками собирается следующая информация: IP-адрес, время запроса, пункт отправления, пункт прибытия и текущие координаты устройства, полученные от браузера. Информация обезличена, не является персональными данными, и используется только в целях прогноза загруженности остановочных пунктов и маршрутов.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Понятно</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="media/js/jquery-3.4.1.min.js"></script>
<script src="media/js/stations.js"></script>
<script src="media/js/popper.min.js"></script>
<script src="media/js/bootstrap.min.js"></script>
<script src="media/js/bootstrap-select.min.js"></script>
</body>
</html>
