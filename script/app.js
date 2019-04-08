var app = angular
    .module('shopApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "partials/card-view/card.view.html"
            // controller: "mainController"
        })
        .when("/list-view", {
            templateUrl: "partials/list-view/list.view.html"
           // controller: "mainController"
        })
    })

   .controller('mainController', function($scope) {
        // Adds all products to the scope from products.js
        $scope.products = products;

        /* Products per page values */
        $scope.productsPerPage = 10; // Sets the default value for products per page.
        $scope.totalProducts = $scope.products.length;

    })





