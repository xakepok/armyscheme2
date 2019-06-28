let UI = {
    Select: {
        from: {
            element: document.querySelector("#form_from"),
            not_load: [0, 24, 25], //Незагружаемые станции
            load: function() {
                for (let station in Scheme.Stations) {
                    if (UI.Select.from.not_load.indexOf(Scheme.Stations[station].id) !== -1) continue;
                    let option = document.createElement('option');
                    option.value = Scheme.Stations[station].id;
                    option.text = Scheme.Stations[station].title;
                    UI.Select.from.element.appendChild(option);
                }
                $(UI.Select.from.element).on('change', function () {
                    if (Scheme.Stations[this.value].available === undefined) {
                        console.log('Нет пунктов назначения');
                        return;
                    }
                    UI.Select.to.load(Scheme.Stations[this.value].available);
                });
                if (Scheme.Geo.autocomplete) {
                    let station = Scheme.Station.getByCoords(window.localStorage.latitude, window.localStorage.longitude);
                    if (station !== false && station.id > 0 && UI.Select.from.not_load.indexOf(station.id) === -1) {
                        $(UI.Select.from.element).val(station.id).selectpicker('refresh');
                        $(UI.Select.from.element).trigger('change');
                    }
                }
            },
        },
        to: {
            element: document.querySelector("#form_to"),
            options: document.querySelectorAll("#form_to > option"),
            load: function(stations) {
                $("#form_to > option").remove();
                for (let station in stations) {
                    if (Scheme.Stations[station] === undefined) continue;
                    let option = document.createElement('option');
                    option.value = Scheme.Stations[station].id;
                    option.text = Scheme.Stations[station].title;
                    UI.Select.to.element.appendChild(option);
                }
                if ($(UI.Select.to.options).length > 0) {
                    $(UI.Select.to.element).removeAttr('disabled').selectpicker('refresh');
                }
                else {
                    $(UI.Select.to.element).attr('disabled', '1').selectpicker('refresh');
                }
                $(UI.Select.to.element).on('change', function () {
                    UI.Scheme.update();
                });
            }
        },
    },
    Scheme: {
        update: function() {
            Scheme.Select.from = $(UI.Select.from.element).val();
            Scheme.Select.to = $(UI.Select.to.element).val();
            if (Scheme.Select.to === 0) {
                $("#l-route").hide();
            }
            let elem = Scheme.Stations[Scheme.Select.from].available[Scheme.Select.to]['route'];
            if (elem === undefined) {
                $('#not_routes').modal('show');
                return;
            }
            UI.Scheme.hideAll();
            for (let i = 0; i < elem.length; i++) {
                let section = UI.Scheme.getElement("[id='" + elem[i] + "']");
                $(section).animate({
                    opacity: UI.Scheme.On.opc
                }, UI.Scheme.On.lat, UI.Scheme.showRoute(Scheme.Stations[Scheme.Select.from].available[Scheme.Select.to].id));
            }
            UI.Scheme.showStations();
            Scheme.Geo.get();
        },
        showStations: function() {
            $(UI.Scheme.obj.stations()).animate({
                opacity: UI.Scheme.On.opc
            });
        },
        showRoute: function(id) {
            $("#route").attr('data', UI.Scheme.path.schemes + '/route_' + id + '.svg');
            $("#l-route").show();
        },
        get: function() {
            let svg = document.querySelector("#scheme");
            return svg.contentDocument;
        },
        hideAll: function() {
            $(UI.Scheme.obj.stations()).animate({ //Станции
                opacity: UI.Scheme.Off.opc
            });
            $(UI.Scheme.obj.routes()).animate({ //Маршруты
                opacity: UI.Scheme.Off.opc
            }, UI.Scheme.Off.lat);
            $(UI.Scheme.obj.railways()).animate({ //ЖД
                opacity: UI.Scheme.Off.opc
            }, UI.Scheme.Off.lat);
            $(UI.Scheme.obj.crosses()).animate({ //Пересадки
                opacity: UI.Scheme.Off.opc
            }, UI.Scheme.Off.lat);
            $(UI.Scheme.obj.info()).animate({ //Инфо
                opacity: UI.Scheme.Off.opc
            }, UI.Scheme.Off.lat);
            $(UI.Scheme.obj.not_show()).animate({ //Остальное
                opacity: UI.Scheme.Off.opc
            }, UI.Scheme.Off.lat);
        },
        obj: {
            stations: function () {
                let s = UI.Scheme.get();
                return s.querySelectorAll("g[id^='station_']");
            },
            routes: function() {
                let s = UI.Scheme.get();
                return s.querySelectorAll("[id^='rt']");
            },
            railways: function () {
                let s = UI.Scheme.get();
                return s.querySelectorAll("[id^='rw_']");
            },
            crosses: function () {
                let s = UI.Scheme.get();
                return s.querySelectorAll("[id^='crs_']");
            },
            not_show: function () {
                let s = UI.Scheme.get();
                return s.querySelectorAll("[id^='not_show']");
            },
            info: function () {
                let s = UI.Scheme.get();
                return s.querySelectorAll("[id^='info']");
            },
        },
        getElement: function(id) {
            let s = UI.Scheme.get();
            return s.querySelector(id);
        },
        On: {
            opc: 1.0,
            lat: 100
        },
        Off: {
            opc: 0.1,
            lat: 100
        },
        path: {
            schemes: 'media/scheme/',
        },
    },
};
