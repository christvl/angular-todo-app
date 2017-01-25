//here all the services code goes
'use strict';
angular.module('todoListApp')
.service('dataService', function($http){
    
    //Creates a callback function for the static json data
    this.getTodos = function(callback){
        $http.get('json/todos.json')
        .then(callback)
    }
    //alerts the user how many todos got deleted
    this.deleteTodo = function(todo){
        alert("The " + todo.name + " todo has been deleted!");
        
    };
    //alerts the user how many todos got saved
    this.saveTodo = function(todos){
        alert(todos.length+ " todos has been saved!");
    }
});