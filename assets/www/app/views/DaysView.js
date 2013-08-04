templates.daysView = "app/views/DaysView.html";

window.DaysView = Backbone.View.extend({

    title: "CANELA 2013",
    backLabel: "Atr\xe1s",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },


    events:{
        "click ul":"listItemClick"
    },

    render:function (eventName) {
        this.$el.html(templates.daysView);
        return this;
    },

    listItemClick: function( event ) {

        this.$el.find( "li" ).removeClass( "listSelected" );
        var target = $( event.target )
        if (target.get(0).nodeName.toUpperCase() != "LI") {
            target=target.parent();
        }

        target.addClass( "listSelected" );

        var view = new SearchView( {searchString:target.text()} );
        window.viewNavigator.pushView( view );
    }

});