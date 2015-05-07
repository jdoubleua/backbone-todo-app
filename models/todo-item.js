var TodoItem = Backbone.Model.extend({
    defaults: {
        completed: false
    },

    urlRoot: "http://jsonplaceholder.typicode.com/todos",

    validate: function(attrs){
        if(!attrs.title)
        return "title is required!";
    },
    toggle: function(){
        this.set("completed", !this.get("completed"));
    }
});