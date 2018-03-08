angular.module('ecommerce').component('product', {
    templateUrl: "app/components/product/product.html",
    controller: function(){
        // This was dummy data to test:
        // this.product = {name:'Shoes',
        // imageUrl:'https://m.media-amazon.com/images/G/01/6pm/landing/2017/shoes/April/Boat_Shoes._V530666624_.jpg',
        // description:'These stylish shoes are great for throwing at people.  Holding pencils.  Also could be worn on feet.',
        // price:25
        // }
        ////////////////////
        // switched to run from button bindings.
        // this.addItem = function(cartSrvc){
        //     cartSrvc.addItem(this.product);
        // }
    },
    controllerAs:"pd",
    bindings:{
        product: "<", // < one way data bind ,  child cannot edit parent value
                      // = two way data bind , child can alter parents data
                      // @ string binding
                      // & action binding. passing down js code to run
        buttonLabel:'@',
        buttonAction:'&'
    }
})