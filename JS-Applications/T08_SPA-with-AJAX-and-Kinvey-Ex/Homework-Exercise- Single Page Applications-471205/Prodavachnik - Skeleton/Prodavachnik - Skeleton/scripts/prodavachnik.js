function startApp() {
    $('header').find('a').show();
    
    function showView(view) {
        $('section').hide();

        switch(view) {
            case 'home':
                $('#viewHome').show();
                break;
            case 'login':
                $('#viewLogin').show();
                break;
            case 'register':
                $('#viewRegister').show();
                break;
            case 'ads':
                $('#viewAds').show();
                break;
            case 'create':
                $('#viewCreateAd').show();
                break;
            case 'details':
                $('#viewDetailsAd').show();
                break;
            case 'edit':
                $('#viewEditAd').show();
                break;
        }
    }
    
    function navigateTo(e) {
        $('section').hide();
        let target = $(e.target).attr('data-target');
        $('#' + target).show();
    }

    $('header').find('a[data-target]').click(navigateTo);
    $('#buttonLoginUser').click(login);
    $('#buttonRegisterUser').click(register);

    let requester = (() => {
        const baseURL = 'https://baas.kinvey.com/';
        const appKey = 'kid_SJyAGWqwZ';
        const appSecret = 'f866551797294bf5808c415f4eafcec5';

        function makeAuth(type) {
            if(type == 'basic') return 'Basic' + btoa(appKey + ':' + appSecret);
            else return 'Kinvey ' + localStorage.getItem('authtoken');
        }

        function makeRequest(method, module, url, auth) {
            return req = {
                url: baseURL + module + '/' + appKey + '/' + url,
                method,
                headers: {
                    'Authorization': makeAuth(auth)
                }
            };
        }

        function get(module, url, auth) {
            return $.ajax(makeRequest('GET', module, url, auth));
        }

        function post(module, url, data, auth) {
            let req = makeRequest('POST', module, url, auth);
            req.data = JSON.stringify(data);
            req.headers['Content-Type'] = 'application/json';
            return $.ajax(req);
        }

        function update(module, url, data, auth) {
            let req = makeRequest('PUT', module, url, auth);
            req.data = JSON.stringify(data);
            return $.ajax(req);
        }

        function remove(module, url, auth) {
            return $.ajax(makeRequest('DELETE', module, url, auth));
        }

        return {
            get, post, update, remove
        }
    })();

    if(localStorage.getItem('authtoken') !== null &&
        localStorage.getItem('username') !== null) {
        $('#loggedInUser').text(`Welcome, ${localStorage.getItem('username')}`);
    }

    function saveSession(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
        $('#loggedInUser').text(`Welcome, ${data.username}`);
        $('#loggedInUser').show();
    }

    async function login() {
        let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let data = await requester.post('user', 'login', {username, password}, 'basic');
            saveSession(data);
            showView('ads');
        } catch (err) {
            console.error(err);
        }
    }
    
    async function register() {
        let form = $('#formRegister');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let data = await requester.post('user', '', {username, password}, 'basic');
            saveSession(data);
            showView('ads');
        } catch (err) {
            console.error(err);
        }
    }
}