
angular
    .module('app',[
    ])
    .config(config)
    .run(run)
    .constant('API_URL', 'http://localhost:3000');

config.$inject = ['$httpProvider'];

function config($httpProvider) {

    $httpProvider.interceptors.push('AuthInterceptor');

};


run.$inject = [];

function run() {

};