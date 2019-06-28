document.addEventListener('DOMContentLoaded', function () {
    let table = $('#data').DataTable({
        ajax: Scheme.Stat.url.show,
        columns: [
            {data: 'dat'},
            {
                data: 'from', render: function (data) {
                    return Scheme.Stations[data].title
                }
            },
            {
                data: 'to', render: function (data) {
                    return Scheme.Stations[data].title
                }
            },
            {
                data: 'coords', render: function (data) {
                    let coords = data.split(',');
                    let latitude = parseFloat(coords[0]);
                    let longitude = parseFloat(coords[1]);
                    let station = Scheme.Station.getByCoords(latitude, longitude);
                    return (station !== false) ? station.title : 'Далеко';
                }
            },
        ],
        order: [[0, "desc"]],
        pageLength: 100,
    });
    setInterval( function () {
        table.ajax.reload();
    }, 10000 );
}, false);