templates.clubMapView = "app/views/ClubMapView.html";

window.ClubMapView = Backbone.View.extend({

    title: "Mapa",
    backLabel: "Atr\xe1s",
    scroll:false,

    initialize: function(options) {
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
            var map = L.map('map', {
                center: [self.latitude, self.longitude],
                zoom: 15
            });

            self.map = map;

        }, 100 );
    }

});