let auth=(()=>{
    //if(localStorage.getItem('authtoken')!==null &&
    //    localStorage.getItem('username')!==null){
    //    userLoggedIn();
    //}else{
    //    userLoggedOut();
    //}
    //showView('home');

    function saveSession(data){
        localStorage.setItem('username', data.username);
        localStorage.setItem('id',data.id);
        localStorage.setItem('authtoken',data._kmd.authtoken);
        userLoggedIn();
    }


    //login
    function login(username, password) {
       return remote.post('user', 'login', {username, password}, 'basic');

    }

    //register
    function register(username, password) {
            return remote.post('user', '', {username, password}, 'basic');
    }

    //logout
    function logout() {
        return remote.post('user', '_logout', {authtoken:localStorage.getItem('authtoken')});
    }

    return{
        saveSession,login,register,logout
    }
})();
