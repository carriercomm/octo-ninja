angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$http,$log,CONFIG_ENV,$ionicLoading) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal_source.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  // Function testing.
  $scope.test = function() {
    $ionicLoading.show();
    //PersonService testing
    $http.get(CONFIG_ENV.api_endpoint+'person/create').
        success(function(data) {
          $log.info("PersonService create result:",data);
          $ionicLoading.hide();
        })
        .error(function(error){
          $log.error("PersonService create error:",error);
          $ionicLoading.hide();
        });
  };
})
.controller('SourceCtrl',function($scope,$log,$ionicLoading,$http,CONFIG_ENV){
      $ionicLoading.show();
      $scope.sourceFiles=[];
      $scope.sourceVideos=[];
      //Initialize function call
      $scope.init = function(){
        //SourceService get files
        $http.get(CONFIG_ENV.api_endpoint+'source/files').
            success(function(data) {
              $log.info("SourceService get files result:",data);
              $scope.sourceFiles = data;
              $ionicLoading.hide();
            })
            .error(function(error){
              $log.error("SourceService ge files error:",error);
              $ionicLoading.hide();
            });
        //SourceService get videos
        $http.get(CONFIG_ENV.api_endpoint+'source/videos').
            success(function(data) {
              $log.info("SourceService get videos result:",data);
              $scope.sourceVideos = data;
              $ionicLoading.hide();
            })
            .error(function(error){
              $log.error("SourceService ge videos error:",error);
              $ionicLoading.hide();
            });
      }

})
.controller('PersonListCtrl', function($scope) {
  $scope.personlist = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 }
  ];
  //@example:http://krispo.github.io/angular-nvd3/#/
      /* Chart options */
      $scope.options = {
        chart: {
          type: 'discreteBarChart',
          // height:450,
          margin : {
            top: 20,
            right: 20,
            bottom: 50,
            left: 55
          },
          x: function(d){ return d.label; },
          y: function(d){ return d.value; },
          showValues: true,
          valueFormat: function(d){
            return d3.format(',.4f')(d);
          },
          transitionDuration: 500,
          xAxis: {
            axisLabel: 'X Axis'
          },
          yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30
          }
        }
      };

      /* Chart data */
      $scope.data = [{
        key: "Cumulative Return",
        values: [
          { "label" : "A" , "value" : 29.765957771107 },
          { "label" : "B" , "value" : 0 },
          { "label" : "C" , "value" : 32.807804682612 },
          { "label" : "D" , "value" : 196.45946739256 },
          { "label" : "E" , "value" : 0.19434030906893 },
          { "label" : "F" , "value" : 98.079782601442 },
          { "label" : "G" , "value" : 13.925743130903 },
          { "label" : "H" , "value" : 5.1387322875705 }
        ]
      }];
})

.controller('PersonDetailCtrl', function($scope, $stateParams) {
});
