function toDoList() {
  this.item = [],
  this.currentId = 0
}

toDoList.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.item.push(item);
}

toDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function items(item) {
  this.toDo = item
}

var newList = new toDoList("Finish this site");

$(document).ready(function() {
  $("form.toDo").submit(function(event) {
    event.preventDefault();
    var input = $("input#userInput").val();
    var newnew = new items(input);
    alert(newnew.toDo);
    newList.addItem(newnew);
    console.log(newList.item)
  });
});
