
angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['RandomUserFactory', 'UserFactory'];

function MainCtrl(RandomUserFactory, UserFactory) {

    var vm = this;
    vm.getRandomUser = getRandomUser;
    vm.login = login;
    vm.logout = logout;

    // initialisation
    UserFactory.getUser().then(function success(response){
        vm.user = response.data;
    });

    function getRandomUser(){
        RandomUserFactory.getUser().then(function success(response){
            vm.randomUser = response.data;
        }, handleError);
    }

    function login(username, password){
        UserFactory.login(username, password).then(function success(response){
            vm.user = response.data.user;
            console.log(response.data.token);
        }, handleError);
    }

    function logout(){
        UserFactory.logout();
        vm.user = null;
    }

    function handleError(response){
        console.log('Error: ' + response.data);
    }


};
