angular.module('ecommerce').controller('productListCtrl', function($scope, productSrvc, cartSrvc){
  // This will load up our products on the $scope
  $scope.addItem = cartSrvc.addItem;
  
  productSrvc.getProducts().then(products=>{
    $scope.products = products;
  });
})
