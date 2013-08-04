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
    },

    render:function (eventName) {
        var template = _.template(templates.searchResults);
        this.$el.html(template( {searchString:this.searchString, description:this.model.description, concerts: this.model.concerts } ));
        var self = this;

        return this;
    }

});