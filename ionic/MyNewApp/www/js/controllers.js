angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $ionicModal, $timeout,$http,$log,CONFIG_ENV,$ionicLoading) {
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
        $scope.sourceTargets=[];
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
          //SourceService get targets
          $http.get(CONFIG_ENV.api_endpoint+'source/targets').
              success(function(data) {
                  $log.info("SourceService get targets result:",data);
                  $scope.sourceTargets = data;
                  $ionicLoading.hide();
              })
              .error(function(error){
                  $log.error("SourceService ge targets error:",error);
                  $ionicLoading.hide();
              });
      }

})
.controller('PersonTabCtrl', function($scope,$log,$ionicLoading,$http,CONFIG_ENV) {
  $scope.personlist = [
    //{ title: 'Reggae', id: 1 },
    //{ title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 }
  ];
  //@example:http://krispo.github.io/angular-nvd3/#/
      /* Chart options */
      $scope.testChartOptions = {
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
      $scope.testChartData = [{
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
      //@example:http://plnkr.co/edit/vtKWU0?p=preview
      /* Chart options */
      $scope.personNamesChartOptions = {
        chart: {
          type: 'pieChart',
          height: 400,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: true,
          transitionDuration: 500,
          labelThreshold: 0.01,
          legend: {
            margin: {
              top: 5,
              right: 35,
              bottom: 5,
              left: 0
            }
          }
        }
      };

      /* Chart data */
      $scope.personNamesChartData = [{
        key: "One",
        y: 5
      },
        {
          key: "Two",
          y: 2
        },
        {
          key: "Three",
          y: 9
        },
        {
          key: "Four",
          y: 7
        },
        {
          key: "Five",
          y: 4
        },
        {
          key: "Six",
          y: 3
        },
        {
          key: "Seven",
          y: .5
        }];
      //@example:http://plnkr.co/edit/jOoJik?p=preview
      /* Chart options */
      $scope.personTagsChartOptions = {
        chart: {
          type: 'pieChart',
          height: 350,
          donut: true,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: true,

          pie: {
            startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
            endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
          },
          transitionDuration: 500,
          legend: {
            margin: {
              top: 5,
              right: 70,
              bottom: 5,
              left: 0
            }
          }
        }
      };

      /* Chart data */
      $scope.personTagsChartData = [
        {
          key: "One",
          y: 5
        },
        {
          key: "Two",
          y: 2
        },
        {
          key: "Three",
          y: 9
        },
        {
          key: "Four",
          y: 7
        },
        {
          key: "Five",
          y: 4
        },
        {
          key: "Six",
          y: 3
        },
        {
          key: "Seven",
          y: .5
        }
      ];
      //@example:http://plnkr.co/edit/U1wWbe?p=preview
      /* Chart options */
      $scope.personAggregateChartOptions = {
        chart: {
          type: 'historicalBarChart',
          height: 250,
          margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 50
          },
          x: function(d){return d[0];},
          y: function(d){return d[1]/100000;},
          showValues: true,
          valueFormat: function(d){
            return d3.format(',.1f')(d);
          },
          transitionDuration: 500,
          xAxis: {
            axisLabel: 'X Axis',
            tickFormat: function(d) {
              return d3.time.format('%x')(new Date(d))
            },
            rotateLabels: 50,
            showMaxMin: false
          },
          yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 35,
            tickFormat: function(d){
              return d3.format(',.1f')(d);
            }
          }
        }
      };

      /* Chart data */
      $scope.personAggregateChartData = [{
        "key" : "Quantity" ,
        "bar": true,
        "values" : [ [ 1136005200000 , 1271000.0] , [ 1138683600000 , 1271000.0] , [ 1141102800000 , 1271000.0] , [ 1143781200000 , 0] , [ 1146369600000 , 0] , [ 1149048000000 , 0] , [ 1151640000000 , 0] , [ 1154318400000 , 0] , [ 1156996800000 , 0] , [ 1159588800000 , 3899486.0] , [ 1162270800000 , 3899486.0] , [ 1164862800000 , 3899486.0] , [ 1167541200000 , 3564700.0] , [ 1170219600000 , 3564700.0] , [ 1172638800000 , 3564700.0] , [ 1175313600000 , 2648493.0] , [ 1177905600000 , 2648493.0] , [ 1180584000000 , 2648493.0] , [ 1183176000000 , 2522993.0] , [ 1185854400000 , 2522993.0] , [ 1188532800000 , 2522993.0] , [ 1191124800000 , 2906501.0] , [ 1193803200000 , 2906501.0] , [ 1196398800000 , 2906501.0] , [ 1199077200000 , 2206761.0] , [ 1201755600000 , 2206761.0] , [ 1204261200000 , 2206761.0] , [ 1206936000000 , 2287726.0] , [ 1209528000000 , 2287726.0] , [ 1212206400000 , 2287726.0] , [ 1214798400000 , 2732646.0] , [ 1217476800000 , 2732646.0] , [ 1220155200000 , 2732646.0] , [ 1222747200000 , 2599196.0] , [ 1225425600000 , 2599196.0] , [ 1228021200000 , 2599196.0] , [ 1230699600000 , 1924387.0] , [ 1233378000000 , 1924387.0] , [ 1235797200000 , 1924387.0] , [ 1238472000000 , 1756311.0] , [ 1241064000000 , 1756311.0] , [ 1243742400000 , 1756311.0] , [ 1246334400000 , 1743470.0] , [ 1249012800000 , 1743470.0] , [ 1251691200000 , 1743470.0] , [ 1254283200000 , 1519010.0] , [ 1256961600000 , 1519010.0] , [ 1259557200000 , 1519010.0] , [ 1262235600000 , 1591444.0] , [ 1264914000000 , 1591444.0] , [ 1267333200000 , 1591444.0] , [ 1270008000000 , 1543784.0] , [ 1272600000000 , 1543784.0] , [ 1275278400000 , 1543784.0] , [ 1277870400000 , 1309915.0] , [ 1280548800000 , 1309915.0] , [ 1283227200000 , 1309915.0] , [ 1285819200000 , 1331875.0] , [ 1288497600000 , 1331875.0] , [ 1291093200000 , 1331875.0] , [ 1293771600000 , 1331875.0] , [ 1296450000000 , 1154695.0] , [ 1298869200000 , 1154695.0] , [ 1301544000000 , 1194025.0] , [ 1304136000000 , 1194025.0] , [ 1306814400000 , 1194025.0] , [ 1309406400000 , 1194025.0] , [ 1312084800000 , 1194025.0] , [ 1314763200000 , 1244525.0] , [ 1317355200000 , 475000.0] , [ 1320033600000 , 475000.0] , [ 1322629200000 , 475000.0] , [ 1325307600000 , 690033.0] , [ 1327986000000 , 690033.0] , [ 1330491600000 , 690033.0] , [ 1333166400000 , 514733.0] , [ 1335758400000 , 514733.0]]
      }];
      //Select option variables for counters:
      $scope.personNamesSelOpts=[];
      $scope.personTagsSelOpts=[];
      $scope.personAggregateSelOpts=[];
      var baseUrl = "http://localhost:9393/metrics";
      $http.get(baseUrl + "/" + 'field-value-counters').
          success(function(data) {
            $log.info("getMenuOptions get result:",data.content);
            $scope.personNamesSelOpts= data.content;
            $scope.personTagsSelOpts= data.content;
            $log.info($scope.personNamesSelOpts,$scope.personTagsSelOpts,$scope.personAggregateSelOpts);
          })
          .error(function(error){
            $log.error("getMenuOptions error:",error);
            $ionicLoading.hide();
          });
      $http.get(baseUrl + "/" + 'aggregate-counters').
          success(function(data) {
            $log.info("getMenuOptions get result:",data.content);
            $scope.personAggregateSelOpts= data.content;
            $log.info($scope.personNamesSelOpts,$scope.personTagsSelOpts,$scope.personAggregateSelOpts);
          })
          .error(function(error){
            $log.error("getMenuOptions error:",error);
            $ionicLoading.hide();
          });

})

.controller('PersonDetailCtrl', function($scope, $stateParams) {
})
.controller('GroupTabCtrl', function($scope,$log,$ionicLoading,$http,CONFIG_ENV) {
      //@example:http://plnkr.co/edit/6hjwSA?p=preview
      /* Chart options */
      $scope.groupTagsChartOptions = {
        chart: {
          type: 'scatterChart',
          height: 450,
          color: d3.scale.category10().range(),
          scatter: {
            onlyCircles: false
          },
          showDistX: true,
          showDistY: true,
          tooltipContent: function(key) {
            return '<h3>' + key + '</h3>';
          },
          transitionDuration: 350,
          xAxis: {
            axisLabel: 'X Axis',
            tickFormat: function(d){
              return d3.format('.02f')(d);
            }
          },
          yAxis: {
            axisLabel: 'Y Axis',
            tickFormat: function(d){
              return d3.format('.02f')(d);
            },
            axisLabelDistance: 30
          }
        }
      };

      /* Chart data */
      $scope.groupTagsChartData = $scope.data = generateData(4,40);

      /* Random Data Generator (took from nvd3.org) */
      function generateData(groups, points) {
        var data = [],
            shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
            random = d3.random.normal();

        for (var i = 0; i < groups; i++) {
          data.push({
            key: 'Group ' + i,
            values: []
          });

          for (var j = 0; j < points; j++) {
            data[i].values.push({
              x: random()
              , y: random()
              , size: Math.random()
              , shape: shapes[j % 6]
            });
          }
        }
        return data;
      }
})
.controller('GroupDetailCtrl', function($scope, $stateParams) {
})
.controller('SettingCtrl', function($scope, $http, $rootScope, $location,$ionicModal,$ionicLoading,$ionicNavBarDelegate,
                                    CONFIG_ENV,$log,$cordovaToast) {
    $scope.settings = {};
    $scope.settings.stompInterval = 5;
//Websocket/Stomp testing:
    var client = Stomp.client( CONFIG_ENV.stomp_uri, CONFIG_ENV.stomp_protocol );
    client.connect( "", "",
        function() {
            client.subscribe("jms.topic.test",
                function( message ) {
                    $log.debug( message );
                    $cordovaToast.show('Here is a message!', 'long', 'center').then(function(success) {});
                },
                { priority: 9 }
            );
            client.send("jms.topic.test", { priority: 9 }, "Pub/Sub over STOMP!");
        }
    );
})
;
