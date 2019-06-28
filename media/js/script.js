document.addEventListener('DOMContentLoaded', function () {
    $('#form_to').attr('disabled', '1');
    $('select').selectpicker();
    let svg = document.querySelector("#scheme");
    UI.Select.from.load();
    svg.addEventListener("load",function(){

    });
    Scheme.Geo.get();
}, false);