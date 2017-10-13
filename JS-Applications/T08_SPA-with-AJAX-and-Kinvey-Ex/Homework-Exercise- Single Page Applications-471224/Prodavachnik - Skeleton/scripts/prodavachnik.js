function startApp() {
    // Clear user auth information at startup
    //sessionStorage.clear();

    showHideMenuLinks();
    showView('viewHome');

    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListAds").click(listAds);
    $("#linkCreateAd").click(showCreateBookView);
    $("#linkLogout").click(logoutUser);

    // Bind the form submit buttons
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateAd").click(createAd);
    $("#buttonEditAd").click(editAd);
    $("form").submit(function(event) { event.preventDefault() });

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_B1qSyGqvb";
    const kinveyAppSecret = "679c2ae06c5e4dcb8f56e0a0483dba5f";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        console.warn(errorMsg);
    }

    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken') == null) {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
        } else {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
        }
    }

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function loginUser() {
        const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/login";
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyLoginUrl,
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });

        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
        }
    }

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        $('#loggedInUser').text("Welcome, " + username + "!");
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function registerUser() {
        const kinveyRegisterUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyRegisterUrl,
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });

        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
        }
    }

    function listAds() {
        $('#ads').empty();
        showView('viewAds');

        const kinveyBooksUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads";
        $.ajax({
            method: "GET",
            url: kinveyBooksUrl,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdsSuccess,
            error: handleAjaxError
        });

        function loadAdsSuccess(ads) {
            if (ads.length == 0) {
                $('#books').text('No ads.');
            } else {
                let adsTable = $('<table>')
                    .append($('<tr>').append(
                        '<th>Title</th>',
                        '<th>Description</th>',
                        '<th>Publisher</th>',
                        '<th>Date Published</th>',
                        '<th>Price</th>',
                        '<th>Actions</th>')
                    );

                for (let ad of ads) {
                    let readMoreLink = $('<a href="#">[Read More]</a>')
                        .click(adDetails.bind(this, ad));
                    let links = [readMoreLink, ' '];
                    if (ad._acl.creator == sessionStorage['userId']) {
                        let deleteLink = $('<a href="#">[Delete]</a>')
                            .click(deleteAd.bind(this, ad));
                        let editLink = $('<a href="#">[Edit]</a>')
                            .click(loadAdForEdit.bind(this, ad));
                        links.push(editLink);
                        links.push(' ');
                        links.push(deleteLink);
                    }
                    adsTable.append($('<tr>').append(
                        $('<td>').text(ad.title),
                        $('<td>').text(ad.description),
                        $('<td>').text(ad.publisher),
                        $('<td>').text(ad.datePublished),
                        $('<td>').text(ad.price),
                        $('<td>').append(links)
                    ));
                }
                $('#ads').append(adsTable);
            }
        }
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function showCreateBookView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }

    function adDetails(ad) {
        $('#ad').empty();

        let advertInfo = $('<div>')
            .append(
                $('<img>').attr('src', ad.image),
                $('<h1>').text(ad.title),
                $('<label>').text('Description:'),
                $('<p>').text(ad.description),
                $('<label>').text('Publisher:'),
                $('<p>').text(ad.publisher),
                $('<label>').text('Date published:'),
                $('<p>').text(ad.datePublished),
                $('<div>').text('Views:' + ad.viewsCount)
            );

        $('#ad').append(advertInfo);

        incrementViewsCount(ad);
        showAdDetails();
    }

    function incrementViewsCount(ad) {
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads/" + ad._id,
            headers: getKinveyUserAuthHeaders(),
            success: incrementCounter,
            error: handleAjaxError
        });

        function incrementCounter(data) {
            data.viewsCount = Number(data.viewsCount) + 1;

            $.ajax({
                method: "PUT",
                url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads/" + ad._id,
                headers: getKinveyUserAuthHeaders(),
                data: data,
                error: handleAjaxError
            });
        }
    }

    function showAdDetails() {
        showView('viewDisplayAd');
    }

    function createAd() {
        let userId = sessionStorage.getItem('userId');

        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/" + userId,
            headers: getKinveyUserAuthHeaders(),
            success: publishAd,
            error: handleAjaxError
        });

        function publishAd(userInfo) {
            const kinveyBooksUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads";
            let adData = {
                title: $('#formCreateAd input[name=title]').val(),
                description: $('#formCreateAd textarea[name=description]').val(),
                publisher: userInfo.username,
                datePublished: $('#formCreateAd input[name=datePublished]').val(),
                price: $('#formCreateAd input[name=price]').val(),
                image: $('#formCreateAd input[name=image]').val(),
                viewsCount: 0
            };

            $.ajax({
                method: "POST",
                url: kinveyBooksUrl,
                headers: getKinveyUserAuthHeaders(),
                data: adData,
                success: listAds,
                error: handleAjaxError
            });
        }
    }

    function deleteAd(ad) {
        const kinveyAdUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/ads/" + ad._id;
        $.ajax({
            method: "DELETE",
            url: kinveyAdUrl,
            headers: getKinveyUserAuthHeaders(),
            success: listAds,
            error: handleAjaxError
        });
    }

    function loadAdForEdit(ad) {
        const kinveyAdUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/ads/" + ad._id;
        $.ajax({
            method: "GET",
            url: kinveyAdUrl,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdForEditSuccess,
            error: handleAjaxError
        });

        function loadAdForEditSuccess(ad) {
            $('#formEditAd input[name=id]').val(ad._id);
            $('#formEditAd input[name=publisher]').val(ad.publisher);
            $('#formEditAd input[name=viewsCount]').val(ad.viewsCount);
            $('#formEditAd input[name=title]').val(ad.title);
            $('#formEditAd textarea[name=description]').val(ad.description);
            $('#formEditAd input[name=datePublished]').val(ad.datePublished);
            $('#formEditAd input[name=price]').val(ad.price);
            showView('viewEditAd');
        }
    }

    function editAd() {
        const kinveyBookUrl =  kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/ads/" + $('#formEditAd input[name=id]').val();

        let adData = {
            title: $('#formEditAd input[name=title]').val(),
            publisher: $('#formEditAd input[name=publisher]').val(),
            viewsCount: $('#formEditAd input[name=viewsCount]').val(),
            description: $('#formEditAd textarea[name=description]').val(),
            datePublished: $('#formEditAd input[name=datePublished]').val(),
            price: $('#formEditAd input[name=price]').val(),
            image: $('#formEditAd input[name=image]').val()
        };

        $.ajax({
            method: "PUT",
            url: kinveyBookUrl,
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: listAds,
            error: handleAjaxError
        });
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        showHideMenuLinks();
        showView('viewHome');
    }
}