templates.searchView = "app/views/SearchView.html";

window.SearchView = Backbone.View.extend({

    title: "Cargando...",

    initialize: function(options) {

        this.render();
        this.view = this.$el;

        var self = this;
        this.searchString = options.searchString;

        this.onSearchResult = function(result){
            self.searchResult(result);
        }

        //delay long enough for transition to complete
        SearchManager.search( self.searchString, self.onSearchResult );
    },

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.searchView);

        this.$el.css("height", "100%");
        return this;
    },

    searchResult: function(result) {
        try {
            var view = new SearchResultsView({ model:result, searchString:this.searchString });
            window.viewNavigator.pushView( view );
        }
        catch(e){
            alert(e.toString())
        }
    }

});