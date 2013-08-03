templates.daysView = "app/views/DaysView.html";

window.daysView = Backbone.View.extend({

    destructionPolicy:'never',
    title: "Elige un día",
    backLabel: "Atr&aacute;s",


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


    }
});