
window.SearchManager = {


    search:function (searchString, successCallback, errorCallback) {
        var concerts = [
            {
                "day":"Jueves 8 de Agosto",
                "latitude":"1.234234",
                "longitude":"1.1321121",
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
            }
        ];
        $.each(concerts, function (index, element) {
           if (element.day == searchString) {
               return successCallback(element);
           }
        });
    }
}