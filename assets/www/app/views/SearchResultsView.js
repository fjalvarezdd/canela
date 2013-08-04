templates.searchResults = "app/views/SearchResultsView.html";

window.SearchResultsView = Backbone.View.extend({

    destructionPolicy:'never',
    title: "LINE-UP",
    backLabel: "Atr\xe1s",

    initialize: function(options) {
        this.searchString = options.searchString;

        this.render();
        this.view = this.$el;
    },  

    events:{
        "click #selectMap":"selectMap",
    },

    render:function (eventName) {
        var template = _.template(templates.searchResults);
        this.$el.html(template( {
            searchString:this.searchString,
            description:this.model.description,
            concerts: this.model.concerts,
            latitude: this.model.latitude,
            longitude: this.model.longitude,
            club: this.model.club
         } ));

        var self = this;

        return this;
    },

    selectMap:function (event) {
        var target = $( event.target );
        var view = new ClubMapView({ latitude:target.data("latitude"), longitude:target.data("longitude") });
        window.viewNavigator.pushView( view );
    }

});