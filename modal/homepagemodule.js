// var myApp = angular.module("md", ["ngRoute"]);
var app = angular.module("md", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "view/homepage.html",
      controller:"homemainController"
    })
    .when("/services", {
      templateUrl: "view/service.html",
      controller: "servicemainController"
    })
    .when("/portfolio", {
      templateUrl: "view/portfolio.html",
      controller:"portfoliomainController"
    })
    .when("/blog", {
      templateUrl: "view/blog.html",
      controller : "blogmainController"
    })
    .when("/contact", {
      templateUrl: "view/contact.html",
      controller: "contactmainController"
    })
    .when("/aboutus", {
      templateUrl: "view/aboutus.html",
      controller: "aboutusmainController",
    });
});
