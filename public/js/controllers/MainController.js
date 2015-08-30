
angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['RandomUserFactory', 'UserFactory'];

function MainCtrl(RandomUserFactory, UserFactory) {

    var vm = this;
    vm.getRandomUser = getRandomUser;
    vm.login = login;
    vm.logout = logout;
    vm.message = null;

    vm.username = 'martin';
    vm.password = 'Pmartin';

    // initialisation
    vm.initialisation = function(){
        UserFactory.getUser().then(function success(response){
            vm.user = response.data;
        });
    }

    function getRandomUser(){
        RandomUserFactory.getUser().then(function success(response){
            vm.randomUser = response.data;
        }, handleError);
    }

    function login(username, password){
        UserFactory.login(username, password).then(function success(response){
            vm.user = response.data.user;
            console.log(response.data);
            vm.message = 'Success';
            vm.initialisation();
        }, handleError);
    }

    function logout(){
        UserFactory.logout();
        vm.user = null;
        vm.message = null;
    }

    function handleError(response){
        console.log('Error: ' + response.data);
        vm.message = response.data;
    }

};
