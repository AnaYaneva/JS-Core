let auth = (() => {
    // user/login
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', 'login', 'basic', userData);
    }

    // user/register
    function register(username, password, name) {
        let userData = {
            username,
            password,
            name
        };

        return requester.post('user', '', 'basic', userData);
    }

    // user/logout
    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return requester.post('user', '_logout', 'kinvey', logoutData);
    }

    function saveSession(userInfo) {
        let id=userInfo['_id'];
        sessionStorage.setItem('id', id);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        let authtoken = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', authtoken);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let name = userInfo.name;
        sessionStorage.setItem('name',name);
    }

    return {
        login,
        register,
        logout,
        saveSession
    }
})();