angular.module('midMng', [])
  .controller('MidCtrl', function($scope) {

    $scope.groups=[];
    $scope.students=[];
    $scope.tasks=[];
    
    $scope.addGroup=function() {
      $scope.groups.push({text:$scope.module, textarea:$scope.des});
      $scope.module='';
      $scope.des='';
    }

    $scope.addStudent = function() {
      $scope.students.push({text:$scope.stuName, select:$scope.module});
      $scope.stuName='';
      $scope.module='';
    }
        
    $scope.addTask=function() {
      $scope.tasks.push({text:$scope.task, select:$scope.module, done:false});
      $scope.task='';
      $scope.module='';
    }
    
   $scope.mlength = function(t){
      var count = 0;
      for(var i=0; i < $scope.students.length; i++){
        if($scope.students[i].select == t )
          count++;
      }
      return count;
    };

    $scope.remaining = function(r) {
      var count = 0;
      for(var i=0; i < $scope.tasks.length; i++){
        if($scope.tasks[i].select == r ){
          console.log($scope.tasks[i].select);
          count += $scope.tasks[i].done ? 1 : 0;
        }
      }
      return count;
    };
   
    $scope.plength = function(q){
      var count = 0;
      for(var i=0; i < $scope.tasks.length; i++){
        if($scope.tasks[i].select == q )
          count++;
      }
      return count;
    };

    $scope.pending = function(p) {
      var count = 0;
      for(var i=0; i < $scope.tasks.length; i++){
        if($scope.tasks[i].select == p ){
        console.log($scope.tasks[i].select);
          count += $scope.tasks[i].done ? 0 : 1;
        }
      }
      return count;
    };

    $scope.grpRemove = function(index) {
      if(index>=0){
       $scope.groups.splice(index,1);
      }
    }

    $scope.taskRemove = function(index) {
      if(index>=0){
       $scope.tasks.splice(index,1);
      }
    }

    $scope.stuRemove = function(index) {
      if(index>=0){
       $scope.students.splice(index,1);
      }
    }

  });