"use strict";

(function(){
  angular
  .module("todo",[])
  .controller("todos_controller", TodosController);

  function TodosController(){
    var vm = this;
    vm.todos_list = ["oh","uh","blah"];

    var new_todo = function(){

    };
    
  }

})();
