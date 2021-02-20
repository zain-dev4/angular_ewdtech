app.controller("homemainController",function($scope){
    $scope.HomeObj = {
      weare:`WE ARE`,
      banner: `We are a passionate ecommerce agency that specializes in eye-catchy,robust, and easy-to-use website design & development, mobile application development`,
      creativeAgency: ` CREATIVE AGENCY`,
    };
        
    
});
app.controller("servicemainController", function ($scope) {
  $scope.name = function () {
    var zain = "service";
    return zain;
  };
});
app.controller("portfoliomainController", function ($scope) {
  $scope.name = function () {
    var zain = "portfoliomainController";
    return zain;
  };
});
app.controller("blogmainController", function ($scope) {
   $scope.BLogObj = {
   };
        
});
app.controller("contactmainController", function ($scope) {
  $scope.name = function () {
    var zain = "contactmainController";
    return zain;
  };
});
app.controller("aboutusmainController", function ($scope) {
  $scope.name = function () {
    var zain = "aboutusmainController";
    return zain;
  };
});
