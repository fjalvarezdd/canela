
window.SearchManager = {


    search:function (searchString, successCallback, errorCallback) {
        var concerts = [
            {
                "day":"Jueves 8 de Agosto",
                "latitude":36.723357,
                "longitude":-4.420662,
                "club":"Velvet Club",
                "description":"La fiesta comienza en el ya cl\xe1sico templo de la independencia musical malague\xf1a venerado por los miembros de la enorme familia Canela, el Velvet Club (Calle de Juan de Padilla, 22). Con las actuaciones de JAMIE 4 PRESIDENT y la reuni\xf3n del grupo germen de este evento de pitotales dimensiones THE SKIRMISH SOCIETY.",
                "concerts":
                [
                    {
                        "event": "THE SKIRMISH SOCIETY (REUNION SHOW)",
                        "image": "assets/images/concerts/skirmish.jpg"
                    },
                    {
                        "event": "JAMIE 4 PRESIDENT",
                        "image": "assets/images/concerts/jamie.jpg"
                    }
                ]
            },
            {
                "day":"Viernes 9 de Agosto",
                "latitude":36.714169,
                "longitude":-4.422710,
                "club":"Muelle Uno",
                "description":"Estrenamos un nuevo espacio al aire libre en el Muelle Uno del Puerto de M\xe1laga, con entrada gratuita. Las actuaciones correr\xe1n a cargo de SALVAJE MONTOYA y PABLO UND DESTRUKTION, mientras se celebra por segundo a\xf1o consecutivo el concurso de disfraces para perros y ni\xf1os. Tendremos un miniphotocall y premios para todos.",
                "concerts":
                [
                    {
                        "event": "PABLO UND DESTRUKTION",
                        "image": "assets/images/concerts/pablo.jpg"
                    },
                    {
                        "event": "SALVAJE MONTOYA",
                        "image": "assets/images/concerts/salvaje.jpg"
                    },
                    {
                        "event": "CONCURSO DE DISFRACES DE NI\xd1OS Y PERROS",
                        "image": "assets/images/concerts/fotoperruna.jpg"
                    }
                ]
            },
            {
                "day":"Sabado 10 de Agosto",
                "latitude":36.704711,
                "longitude":-4.476462,
                "club":"Paris 15",
                "description":"El s\xe1bado 10 de agosto ser\xe1 el momento \xe1lgido del festival, en la sala Paris 15. Las hordas de fieles tendr\xe1n la oportunidad por una noche de dar rienda suelta a su imaginaci\xf3n y adoptar la personalidad que prefieran mientras desfilan por nuestro espectacular photocall y reciben un diluvio de confeti y serpentinas, al mismo tiempo que las diferentes bandas van desgranando su repertorio sobre el escenario: LAS RUINAS, WILHELM AND THE DANCING ANIMALS, CUELLO, MUJERES y, como gran colof\xf3n, los canadienses METZ, pen\xfaltima sensaci\xf3n del m\xedtico sello de Seattle Sup Pop. Para terminar, los miembros del Culoactivo Canela har\xa1n bailar a todos los asistentes hasta altas horas de la madrugada. Terminar\xe9is exhaustos pero con una sonrisa de oreja a oreja.",
                "concerts":
                [
                    {
                        "event": "METZ",
                        "image": "assets/images/concerts/metz.jpg"
                    },
                    {
                        "event": "LAS RUINAS",
                        "image": "assets/images/concerts/las-ruinas.jpg"
                    },
                    {
                        "event": "WILHELM AND THE DANCING ANIMALS",
                        "image": "assets/images/concerts/wilhelm.jpg"
                    },
                    {
                        "event": "CULOACTIVO CANELA DJS",
                        "image": "assets/images/concerts/culoactivo.jpg"
                    },
                    {
                        "event": "CUELLO",
                        "image": "assets/images/concerts/cuello.jpg"
                    },
                    {
                        "event": "MUJERES",
                        "image": "assets/images/concerts/mujeres.jpg"
                    }
                ]
            }
        ];
        $.each(concerts, function (index, element) {
           if (element.day == searchString) {
               return successCallback(element);
           }
        });
    }
}