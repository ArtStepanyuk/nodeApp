(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('mainCtrl', mainCtrl);  // this is just angular syntacsis you dont need to worry much about it just copy paste it and change what needs to be changed

    mainCtrl.$inject = []; // this is for things not to brake during minimization dont worry about it either

    function mainCtrl() { // yes controller is just a custom angular function

        var vm = this; // ignore this
       
        };

        activate(); // what we do is here calling a function on page load you see that function activate does console log now we can put more functions there in the end 

        function activate() {
        	console.log("hi im main controller");
    
        }

   
    
})();