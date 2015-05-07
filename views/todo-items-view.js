//Collections View

var TodoItemsView = Backbone.View.extend({
    id: "todoItemsContainer",
    initialize: function (opts) {
        if(!(opts && opts.model))
            throw new Error("Model is not specified!");

        this.model.on("add", this.onAddTodoItem, this);
        this.model.on("remove", this.onRemoveItem, this);

    },
    onAddTodoItem: function(todoItem){
        var view = new TodoItemView({model:todoItem});
        this.$("#todo-items-view").append(view.render().$el);
    },
    onRemoveItem: function(todoItem){
        this.$("li#" + todoItem.id).remove();

    },

    events: {
      "keypress #newTodoItem": 'onKeyPress'
    },

    onKeyPress: function(e){
      if(e.keyCode === 13)
          var $textBox = this.$('#newTodoItem');

        if($textBox.val()){
            var todoItem = new TodoItem({title: $textBox.val()});

            this.model.create(todoItem);
            /*Line 40 does these two lines
             todoItem.save();
             this.model.add(todoItem);
             */
            $textBox.val("");
        }
    },


    render: function(){

        var template = $("#todoItemsTemplate").html();
        var html = Mustache.render(template);
        this.$el.html(html);

        return this;
    }
});