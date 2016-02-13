(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('notFoundCtrl', notFoundCtrl);

    notFoundCtrl.$inject = [];

    function notFoundCtrl() {

        var vm = this;

        };

        activate();

        function activate() {
        	console.log("hi im notFound controller");

        }



})();
