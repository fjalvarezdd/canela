templates.aboutView = "app/views/AboutView.html";

window.AboutView = Backbone.View.extend({

    title: "Canela 2013",
    backLabel: "Atrás",
    
    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },  

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.aboutView);
        return this;
    },

});