let remote=(()=>{
    const baseUrl='https://baas.kinvey.com/';
    const appKey='kid_Sy8TArwwZ';
    const appSecret='2388618573a74d59ab33e310ce25e380';

    function makeAuth(type) {
        if(type==='basic') return 'Basic '+btoa(appKey+":"+appSecret);
        else return 'Kinvey '+localStorage.getItem('authtoken');
    }

    function makeRequest(method,module,url,auth) {
        return req = {
            url: baseUrl + module +'/'+ appKey + '/' + url,
            method,
            headers: {
                'Authorization': makeAuth(auth)
            }
        };

        //return $.ajax(req);
    }

    function get(module, url, auth) {
        return $.ajax(makeRequest('GET',module,url,auth));
    }

    function post(module, url,data, auth) {
        let req= makeRequest('POST',module,url,auth);
        req.data=JSON.stringify(data);
        req.headers['Content-Type']='application/json';
        return $.ajax(req);
    }

    function update(module, url,data, auth) {
        let req= makeRequest('PUT',module,url,auth);
        req.data=JSON.stringify(data);
        req.headers['Content-Type']='application/json';
        return $.ajax(req);
    }

    function remove (module, url, auth) {
        return $.ajax(makeRequest('DELETE',module,url,auth));
    }

    return{
        get,post,update,remove
    }

})();
