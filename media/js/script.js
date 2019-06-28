document.addEventListener('DOMContentLoaded', function () {
    $('#form_to').attr('disabled', '1');
    $('select').selectpicker();
    let svg = document.querySelector("#scheme");
    UI.Select.from.load();
    svg.addEventListener("load",function(){

    });
    Scheme.Geo.get();
}, false);
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(54240442, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});