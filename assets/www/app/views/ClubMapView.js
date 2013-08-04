templates.clubMapView = "app/views/ClubMapView.html";

window.ClubMapView = Backbone.View.extend({

    title: "Mapa",
    backLabel: "Atr\xe1s",
    scroll:false,

    initialize: function(options) {
        this.club = options.club;
        this.latitude = options.latitude;
        this.longitude = options.longitude;

        this.render();
        this.view = this.$el;
        this.initMap();
    },

    events:{
    },

    render:function (eventName) {
        this.$el.width( "100%" );
        this.$el.height( "100%" );
        this.$el.html(templates.clubMapView);

        var self = this;
        return this;
    },

    initMap:function() {
        var self = this;
        setTimeout( function() {
            // create a map in the "map" div, set the view to a given place and zoom
            var map = L.map('map').setView([self.latitude, self.longitude], 15);

            // add an OpenStreetMap tile layer
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // add a marker in the given location, attach some popup content to it and open the popup
            L.marker([self.latitude, self.longitude]).addTo(map)
                .bindPopup(self.club)
                .openPopup();
        }, 100 );
    }

});