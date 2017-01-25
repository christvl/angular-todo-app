//Here i created all my Main control Functions
'use strict';
 angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){
    
     // adds a new Todo
    /*$scope.addTodo = function(){
        under Construction 
    };*/
   
//prints out the json data array
   dataService.getTodos(function(response){
       console.log(response.data);
       $scope.todos = response.data;
   });
    
     //deletes a todo on the list and because of ng-repeat we can use the variable index
     //index is the position of the current todo
    $scope.deleteTodo = function(todo, $index){
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    }
    
    //Saves a todo on the list
    $scope.saveTodo = function(){
        var filteredTodos = $scope.todos.filter(function(todo){
            if(todo.edited){
               return todo; 
            };
        });
        dataService.saveTodo(filteredTodos);
    };
});