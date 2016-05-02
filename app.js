"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todoController", controllerFunction);

  function controllerFunction(){
    var vm = this;
    vm.todos = [];
    vm.hello = "Hello Pizza!";
    console.log("pizza is displayed");


    vm.createNew = function(){
      console.log("New Todo clicked");
      vm.todos.unshift(vm.new_todo);
      vm.new_todo = "";
      console.log(vm.todos);
      }



  }

})();
