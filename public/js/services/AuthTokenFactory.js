

angular
    .module('app')
    .factory('AuthTokenFactory', AuthTokenFactory);

AuthTokenFactory.$inject = ['$window'];

function AuthTokenFactory($window) {

    var store = $window.localStorage;
    var key = 'auth-token';

    return{
        getToken: getToken,
        setToken: setToken
    };

    function getToken(username, password){
        return store.getItem(key);
    }

    function setToken(token){

        if (token){
            store.setItem(key, token);
        }else {
            store.removeItem(key);
        }
    }

};
